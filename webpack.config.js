var path = require('path');
var webpack = require('webpack');
var HTMLPlugin = require('html-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var extractPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:{
        app:'./src/app.js',
        vendor:['react','react-dom','antd']
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[
                                'env',
                                'react'
                            ]
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:extractPlugin.extract({
                    fallback:{
                        loader:'style-loader'
                    },
                    use:[
                    
                        {
                            loader:'css-loader'
                        }
                    ]
                })
            },
            {
                test:/\.less/,
                use:extractPlugin.extract({
                    fallback: {
                        loader:'style-loader'
                    },
                    use:[
                   
                        {
                            loader:'css-loader',
                            options:{
                                modules:true,
                                minimize:true
                            }
                        },
                        {
                            loader:'less-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),//热更相关插件
        new HTMLPlugin({
            title:'react+antd',
            template:'index.html',
            filename: 'index.html',
            minify:true
            // chunks:['app.bundle','vendor.bundle']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            minChunks:Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks:2
        }),
        new UglifyJSPlugin(),
        new extractPlugin("styles.css")
    ],
    devServer:{
        contentBase:"/dist",
        hot:true,
        port:"8080",
        open:true,
        overlay:{
            errors:true
        }
    }
}