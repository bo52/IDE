const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: [
        './src/index.ts',
    ],
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@main": path.resolve(__dirname, "src/main"),
            "@fun": path.resolve(__dirname, "src/LIB/fun"),
            "@funs": path.resolve(__dirname, "src/LIB/funs"),
            "@teg": path.resolve(__dirname, "src/TEG"),
            "@img": path.resolve(__dirname, "src/img"),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            scriptLoading: 'module',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts|.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images/'
                }
            }
        ],
    },
    devServer: {
        port: 3000,
    },
}