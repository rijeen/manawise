const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [__dirname+'/src/react/app.js'],
    output: {
        filename: 'bundle.js',
        path: __dirname+'/build/',
        publicPath: "/"
    },
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                }
            })
        ]
    },
    module: {
        noParse: /(mapbox-gl)\.js$/,
        rules: [
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3'],
                    plugins: []
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.svg|\.jpg|\.png|\.gif|\.ttf|\.woff|\.woff2|\.eot|\.mp4$/,
                loader: 'file-loader',
                options: {
                    name: 'files/[name].[ext]'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
	    new HtmlWebPackPlugin({
		    template: "./src/react/build/index.html",
		    filename: "index.html",
		    hash: true,
		    removeComments: false
	    }),
        new MiniCssExtractPlugin({
            filename: 'style.min.css',
            chunkFilename: '[id].[hash].css'
        }),
        new CompressionPlugin({
            test: [/\.js/, /\.css/]
        })
    ],
    resolve: {
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat",
            'create-react-class': 'preact-compat/lib/create-react-class',
            'react-dom-factories': 'preact-compat/lib/react-dom-factories'
        },
        extensions: ['.js', '.es6']
    }
};
