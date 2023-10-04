const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'
module.exports = {
    entry: [
        './src/index.tsx',
    ],
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@main": path.resolve(__dirname, "src/main"),
            "@fun": path.resolve(__dirname, "src/LIB/fun"),
            "@funs": path.resolve(__dirname, "src/LIB/funs"),
            "@TEG": path.resolve(__dirname, "src/TEG"),
            "@teg": path.resolve(__dirname, "src/injectable/class.js/TEG"),
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
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: devMode
                    ? []
                    : [
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.9],
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                webp: {
                                    quality: 75,
                                },
                            },
                        },
                    ],
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        port: 3000,
    },
}