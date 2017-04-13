import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpakMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {

  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname,'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
     // Generate an external css file with a hash in the filename
     new ExtractTextPlugin('[name].[contenthash].css'),
    new WebpakMd5Hash(),

    // User CommonsChunkPlugin to create a seperate bundle
    // of vendor libraries so that they are cached seperately
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),

    // Create html file that include reference to bundle JS.
    new HtmlWebpackPlugin({
      template:'src/index.html',

      inject:true

    }),
    // remove duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
