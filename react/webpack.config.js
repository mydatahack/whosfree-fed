const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: {
      main: './src/Index.tsx',
      // can have multiple entry
      // register: './src/register/Index.tsx'
    },
    output: {
      filename: '[name]-react.min.js',
      path: path.join(__dirname, '../assets/js')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
      inline: true,
      contentBase: './public',
      historyApiFallback: true,
      port: 3000
    },
    devtool: false,
    optimization: {
      minimizer: [
        //
        new TerserPlugin({
          parallel: true,
          sourceMap: true, // Must be set to true if using source-maps in production
          exclude: /\.(min)\.(js)$/i,
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            // using default options
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        },
        {
          test: /\.[tj]sx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        },
        {
          test: /\.svg$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      // new HtmlWebPackPlugin({
      //   template: './public/register.html',
      //   filename: 'register.html'
      // }),
      new CopyWebpackPlugin([
        { from: 'public/css', to: 'css' }
      ])
    ]
  }
}