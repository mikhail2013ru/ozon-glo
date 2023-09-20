const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")

const mode = process.env.NODE_ENV || 'development' 
const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined

module.exports = {
    mode,
    target,
    devtool,
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
        rules: [
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : miniCss.loader,    
                    // miniCss.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(woff2?|ttf|eot|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)?$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                            progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                            enabled: false,
                            },
                            pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                            },
                            gifsicle: {
                            interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                            quality: 75
                            }
                        }
                    }
                ],
                type: 'asset/resource',
                generator: {
                    // filename: 'images/[name][ext]'
                    // filename: 'img/[hash][ext][query]'
                    filename: 'img/[name][ext]'
                }
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
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/favicon", to: "favicon" },
            ],
        }),
    ],
}