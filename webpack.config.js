const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DEV_BUILD_DIR = './build';
const PROD_BUILD_DIR = './dist';

module.exports = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV ?? 'development',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? PROD_BUILD_DIR : DEV_BUILD_DIR),
        filename: 'bundle.js',
    },
    target: 'web',
    devServer: {
        static: {
            directory: path.join(__dirname, DEV_BUILD_DIR),
        },
        compress: true,
        liveReload: true,
        port: 9000,
        watchFiles: ['src/**/*'],
    },
    module: {
        rules: [
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
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
    ],
};
