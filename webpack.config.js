



const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'build'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.(scss)$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
            ]
         },
    plugins:[
        new MiniCssExtractPlugin()
    ]
    }