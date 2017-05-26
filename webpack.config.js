let debug   = process.env.NODE_ENV !== "production";
let webpack = require('webpack');
let path    = require('path');

module.exports = {
    context  : path.join(__dirname, "src"),
    devtool  : debug ? "inline-sourcemap" : false,
    devServer: {
        historyApiFallback: debug
    },
    entry    : __dirname + "/src/js/client.js",
    module   : {
        loaders: [
            {
                test   : /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader : 'babel-loader',
                query  : {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            }
        ]
    },
    output   : {
        path    : path.resolve(__dirname, "public"),
        filename: "client.min.js"
    },
    plugins  : debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};