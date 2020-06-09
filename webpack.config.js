const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './index.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules:[
            {test: /\.js$/,exclude: /node_modules/, use: "babel-loader"},
            {test: /\.css$/,exclude: /node_modules/,
                use: [
                  "style-loader",
                  "css-loader"
                ]
            }
        ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    mode :'development',
    plugins: [
        new HtmlWebpackPlugin({
          template: "./index.html"
        })
      ]
};