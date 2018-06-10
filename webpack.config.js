const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
    entry: {
        "app": "./src/"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.bundle.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules:true,
                            localIdentName:'Littleone_[path][name]__[local]--[hash:base64:5]',
                            minimize:true
                        }
                    }

                ],
                exclude: '/node_modules/'
            }
            ,

            // {
            //     enforce: "pre",
            //     loader: 'eslint-loader',
            //     test: /\.js$/,
            //     exclude: '/node_modules/'
            // }
        ]
    }
};