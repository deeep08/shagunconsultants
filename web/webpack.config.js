const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {   test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
            // {
            //     test: require.resolve('wowjs/dist/wow.js'),
            //     loader: 'exports-loader?this.WOW'
            // }
        ]
    }
};
