const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            sourceMap: true,
                        },
                    },
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            minify:
                process.env.NODE_ENV === 'production'
                    ? {
                          collapseWhitespace: true,
                          removeComments: true,
                          removeRedundantAttributes: true,
                          removeScriptTypeAttributes: true,
                          removeStyleLinkTypeAttributes: true,
                          useShortDoctype: true,
                      }
                    : false,
            template: 'src/index.html',
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src') + '/**/*', { nodir: true }),
        }),
    ],
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
        minimize: true, // Css minmizer config
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'styles',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
};
