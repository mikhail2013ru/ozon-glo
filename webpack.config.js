const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require("mini-css-extract-plugin")

// const mode = process.env.NODE_ENV || 'development' 
// const devMode = mode === 'development'
// const target = devMode ? 'web' : 'browserslist'
// const devtool = devMode ? 'source-map' : undefined

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'js/[name].js',
        sourceMapFilename: "js/[name].js.map",
        // chunkFilename: '[id].[chunkhash].js'
        // assetModuleFilename: 'assets/[name][ext]'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },
    module: {
        rules: [{
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    miniCss.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    },
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new miniCss({
            filename: 'css/style.css',
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map[query]',
            exclude: ['vendor.js'],
        })
    ],
}