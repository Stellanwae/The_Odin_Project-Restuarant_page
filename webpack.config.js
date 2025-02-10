const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        clean: true,
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "eval-source-map",
    devServer: {
        static: "./dist",
        hot: true,
        open: true,
    watchFiles: ["./src/template.html"],
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]

};