const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');


console.log(__dirname)
module.exports = {
  mode: 'development',
  entry: __dirname + "/presentation/app.js", //ビルドするファイル
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/')
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    compress: true,
    port: 8080,
  }
}