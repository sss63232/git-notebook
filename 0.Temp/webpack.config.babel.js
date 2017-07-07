const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // webpack 進入點
    context: path.resolve('./src'),
    entry: './App.es6',

    output: {
        filename: './dist/bundle.js'
    },

    // webpack 各個 loader 的設置位置，用 webpack2 寫法
    module: {
        rules: [{
                test: /\.es6$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.(sass|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: 'inline',
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader?limit=8192&name=dist/images/[hash:8].[name].[ext]',
                }]
            },
        ]

    },



    // 在 extensions 設定副檔名的辨識規則，例如放入 .jsx 就能在 require 時省略檔案的 .jsx 副檔名。
    resolve: {
        extensions: [".js", ".es6"]
    },

    devServer: {
        inline: true,
        port: 8888
    },

    devtool: 'source-map',

    // ExtractTextPlugin 的輸出位置
    plugins: [
        new ExtractTextPlugin("./dist/css/style.css"),
    ]
}