const { join } = require("path");
const path = require("path");
const webpack = require("webpack");

module.exports={
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] },
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*",".js", ".jsx","css"] },
    output: {
        path:path.resolve(__dirname, "dist/"),
        publicPath: "dist/",
        filename:"bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname,"dist/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/"
    }
};