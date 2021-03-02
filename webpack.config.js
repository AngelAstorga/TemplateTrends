



const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'build'),
        filename: 'index.js',
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    module: {
        rules:[
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
                test: /\.(png|jpg|jpeg|gif)/,
                type: 'asset/resource'
              },
            ]
         },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'style/[name].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html'
        })
    ]
    }