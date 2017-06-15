module.exports = {
  entry: './src/App.es6',
  
  output: {
    filename: './dist/bundle.js'
  },

  // webpack 各個 loader 的設置位置，webpack2 的寫法略有不同
  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },

      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  
  // 在 extensions 設定副檔名的辨識規則，例如放入 .jsx 就能在 require 時省略檔案的 .jsx 副檔名。
  resolve:{
    extensions: [".js", ".es6"]
  },

  devServer: {
    inline: true,
    port: 8888
  },

  devtool: 'source-map'
}
