const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

const BUILD_DIR = './dist';

module.exports = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV ?? 'development',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, BUILD_DIR),
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js',
    },
    target: 'web',
    devServer: {
        static: {
            directory: path.join(__dirname, BUILD_DIR),
        },
        compress: true,
        liveReload: true,
        port: 9000,
        watchFiles: ['src/**/*'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({ template: './src/index.html' }),
        new PurgeCSSPlugin({
            paths: glob.sync(`src/**/*`, { nodir: true }),
        }),
    ],
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            chunks: 'all',
        },
    },
};
