const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
        // modules: [path.join(__dirname, 'src'), 'node_modules'],
        // alias: {
        //     react: path.join(__dirname, 'node_modules', 'react'),
        // },
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader"
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.png$/,
                type: "asset/resource"
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
        }),
    ],
};