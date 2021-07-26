const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

console.log('gotcha');

module.exports = {
    ...defaultConfig,
    entry: {
        ...defaultConfig.entry,
        editorStyle: './src/editor-block-style.js',
        style: './src/style.js'
    }
}