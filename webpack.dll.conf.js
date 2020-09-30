const path = require('path')
const webpack = require('webpack')

const dllPath = 'dll'

module.exports = {
    entry: {
        'frame': ['vue', 'vuex', 'vue-router'],
    },
    output: {
        path: path.join(__dirname, dllPath),
        filename: '[name].dll.js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '[name]-manifest.json'),
            name: '[name]_[hash]',
            context: process.cwd()
        })
    ]
}