



const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports ={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'build'),
        filename: 'index.js',
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    mode: 'production',
    resolve:{
        alias:{
            '@images': path.resolve(__dirname,'src/assets/images'),
            '@styles': path.resolve(__dirname,'src/styles'),
            '@scripts': path.resolve(__dirname,'src/scripts'),
            '@fonts': path.resolve(__dirname,'src/assets/fonts'),
        }
    },
    module: {
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss)$/i,
                use:[
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                type: 'asset/resource'
              },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                  }
              },
            ]
         },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'style/[name].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'src/index.html'
        }),
        new Dotenv(),
    ]
    }