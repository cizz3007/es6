const path = require('path');

module.exports = {
    entry: {
        "app": "./src/index.js"
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
            // {
            //     enforce: "pre",
            //     loader: 'eslint-loader',
            //     test: /\.js$/,
            //     exclude: '/node_modules/'
            // }
        ]
    }
};