# webpack full example 

```javascript
//--webpack.config.js
// 一些通用的庫
var webpack = require('webpack');
var path = require('path');
var url = require('url');
var webpackHotDevServer = require('webpack-dev-server');

// 用到的插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackBrowserPlugin = require('webpack-browser-plugin');
var HappyPack = require('happypack');//多線程loader 加快編譯速度
var os = require('os');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

// 編譯輸出的控制台信息美化插件
var DashboardPlugin = require('webpack-dashboard/plugin');

// 獲取 node_modules 文件夾的路徑
var node_modules = path.resolve(__dirname, 'node_modules');

// 使用壓縮後的 ReactJS, 優化編譯速度
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var pathMapboxgl = path.resolve(__dirname, 'src/libs/mapbox-gl/mapbox-gl-dev.js');

module.exports = {
    // 調試模式
    // debug: true,

    // 設置webpack識別的base目錄, 絕對路徑
    context: path.resolve(__dirname, './src/'),

    performance: {
        hints: "warning"
    },

    cache: true,

    devtool: 'hidden-source-map',

    devServer: {
        // 設置熱啟動服務器的根目錄，不然一些圖片等靜態資源是加不到的哦
        // contentBase: path.join(__dirname, './src/'),
        contentBase: false,
        hot: true,
        inline: true,
        port: 3002,
        quiet: true,
        noInfo: true,
        clientLogLevel: 'error',
        stats: "errors-only",
        // lazy: true,
        // filename: "vendors.js"
    },

    // 定義的實體
    entry: {
        'index': ['./app.jsx'],
        'vendors': ['whatwg-fetch']
    },

    output: {
        // 這個是項目的輸出路徑，必須是絕對路徑
        path: path.resolve(__dirname, "dist"),
        // path: path.resolve(__dirname, ""),
        filename: 'js/[name].js?v=[hash:5]',

        // 添加 chunkFilename 為了實現 react-router的懶加載
        chunkFilename: 'js/[name].chunk.js?v=[chunkhash:5]',

        // 編譯後的包的訪問位置
        publicPath: './'
    },

    resolve: {
        // root: path.resolve(__dirname, 'app'),
        alias: {
            'mapboxgl': pathMapboxgl,
            'reactmin': pathToReact
        },
        extensions: ['.js', '.sass', '.jsx', '.jpg', '.jpeg', '.gif', '.png']
    },

    module: {
        noParse: [
            /mapbox-gl.+\.js$/,
        ],
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use:'happypack/loader?id=jsx'
            }, {
                test: /\.js$/,
                exclude: /(node_modules[^\/gago\-.*]|bower_components|libs\/mapbox-gl)/,
                // loaders: ['babel-loader?cacheDirectory&presets[]=es2015,presets[]=react,presets[]=stage-0']
                use: 'happypack/loader?id=js'

            },{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: ['style-loader'],
                    loader: 'happypack/loader?id=scss',
                    publicPath:'../'
                })
            }, {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'url-loader?limit=8192&name=./images/[name].[ext]'
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: ['style-loader'],
                    // use: ['css-loader', 'postcss-loader'],
                    use: 'happypack/loader?id=css',
                    publicPath:'../'                    
                })
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            /**
             * 在這裡引入 manifest 文件
             */
            manifest: require('./dist/vendors-manifest.json')
        }),
        //  new WebpackBrowserPlugin(),
        new HappyPack({
            id: 'jsx',
            // threads: 4,
            threadPool: happyThreadPool,
            loaders: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: [
                        ['import', { libraryName: 'antd', style: 'css', }]
                    ]
                }
            }]
        }),
        new HappyPack({
            id: 'js',
            // threads: 4,
            threadPool: happyThreadPool,
            loaders: [{
                loader: 'babel-loader',
                options: {
                    presets: [ 'es2015','react', 'stage-0'],
                    cacheDirectory: true
                }
            }]
        }),
        new HappyPack({
            id: 'scss',
            // threads: 4,
            threadPool: happyThreadPool,
            loaders: ['css-loader', 'sass-loader']
        }),
        new HappyPack({
            id: 'css',
            // threads: 4,
            threadPool: happyThreadPool,
            loaders: ['css-loader', 'postcss-loader'],
        }),
        // 控制台輸出美化

        new DashboardPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            // 模塊的名字--在entry裡面定義的
            name: 'vendors',

            // 模塊的輸出文件名
            filename: 'js/vendors.js'
        }),

        new webpack.HotModuleReplacementPlugin(),

        // 混淆代碼
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: false
        // }),
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            uglifyJS:{
                output: {
                    comments: false
                },
                compress: {
                    warnings: false
                }
            }
        }),

        // 使用 ProvidePlugin 加載使用率高的依賴庫
        new webpack.ProvidePlugin({
            React: 'reactmin',
            mapboxgl: 'mapboxgl',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            $: 'jquery',
        }),

        new ExtractTextPlugin({
            filename: 'css/[name].css?v=[chunkhash:5]',
            allChunks: false,
            // disable: true
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            chunks: ['index', 'vendors']
        }),

        // 這是用於判斷當前的環境（開發環境還是生產環境）
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};
```

```javascript
//--webpack.dll.config.js

const {join} = require('path');
const webpack = require('webpack');
const node_modules = join(__dirname, 'node_modules');

// 使用壓縮後的 ReactJS, 優化編譯速度
const pathToReact = join(node_modules, 'react/dist/react.min.js');

const pathMapboxgl = join(__dirname, 'src/libs/mapbox-gl/mapbox-gl-dev.js');
const OutputDir = join(__dirname,'dist');
module.exports = {
    entry: {
        vendors: ['mapboxgl','react', 'react-dom','react-router','echarts','jquery','lodash','material-ui']
    },
    output: {
        path: OutputDir,
        filename: 'js/[name].dll.js',
    /**
     * output.library
     * 將會定義為 window.${output.library}
     * 在這次的例子中，將會定義為`window.vendor_library`
     */
        library: '[name]_library'
    },
    resolve: {
        alias: {
            'mapboxgl': pathMapboxgl,
        },
        // extensions: ['.js', '.sass', '.jsx', '.jpg', '.jpeg', '.gif', '.png']
    },
    plugins: [
        new webpack.DllPlugin({
      /**
       * path
       * 定義 manifest 文件生成的位置
       * [name]的部分由entry的名字替換
       */
            path: join(OutputDir, '[name]-manifest.json'),
      /**
       * name
       * dll bundle 輸出到那個全局變量上
       * 和 output.library 一樣即可。 
       */
            name: '[name]_library'
        })
    ]
};
```

## 資料來源

https://www.waitig.com/%E4%B8%80%E6%AC%A1%E4%BC%98%E5%8C%96webpack%E6%89%93%E5%8C%85%E7%9A%84%E7%BB%8F%E5%8E%86.html

