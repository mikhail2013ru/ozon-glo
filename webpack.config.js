const path = require('path')
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
        // assetModuleFilename: 'assets/[name][ext]'
    },
    
    module: {
        rules: [{
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    miniCss.loader,
                  // Creates `style` nodes from JS strings
                //devMode ? "style-loader" : MiniCss.loader,                  
                  // Translates CSS into CommonJS
                  "css-loader",
                  {
                    // loader: 'postcss-loader',
                    // options: {
                    //     postcssOptions: {
                    //         plugins: [require('postcss-preset-env')],
                    //     }
                    // }
                  },
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new miniCss({
            filename: 'css/style.css',
        })
    ],
}