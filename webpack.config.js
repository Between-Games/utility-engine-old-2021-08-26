const path = require('path');

module.exports = {
    mode: 'production',
    entry: './source/index.js',

    output: {
        filename: 'index.js',
        library: 'utility-engine',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'build'),
    },
};
