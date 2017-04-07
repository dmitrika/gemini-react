'use strict';

const path = require('path');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        'es2015',
                        // 'stage-0'
                    ]
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
