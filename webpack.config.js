const path = require('path');

const base = {
    entry: './src/index.ts',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};

module.exports = [
    {
        ...base,
        target: 'node',
        output: {
            filename: 'index.node.js',
            path: __dirname,
            libraryTarget: 'umd',
        },
    },
    {
        ...base,
        target: 'web',
        output: {
            filename: 'index.web.js',
            path: __dirname,
            libraryTarget: 'umd',
        },
    },
];
