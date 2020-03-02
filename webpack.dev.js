const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

//"babel-polyfill",
module.exports = {
    devtool: 'inline-source-map',
    entry: [__dirname+'/src/react/app.js'],
    output: {
        filename: 'bundle.js',
        path: __dirname+'/src/react/',
        publicPath: "/"
    },
    mode: 'development',
    module: {
        noParse: /(mapbox-gl)\.js$/,
        rules: [
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'react-hmre', 'stage-3'],
                    plugins: ['transform-object-assign']
                }
            },
            {
                test: /\.svg|\.jpg|\.png|\.gif|\.ttf|\.woff|\.woff2|\.eot$/,
                loader: 'file-loader',
                options: {
                    useRelativePath: true,
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new HtmlWebPackPlugin({
            inject: true,
            template: './src/react/build/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
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
