const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src")
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
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    devServer: {
        port: 3000,
    },
}