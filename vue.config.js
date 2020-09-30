const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const path = require('path')

module.exports = {
    publicPath: './',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins = [
                ...config.plugins,
                new BundleAnalyzerPlugin(),
                new AddAssetHtmlPlugin({
                    filepath: path.resolve(__dirname, './dll/*.js'),
                    publicPath: './js',
                    outputPath: './js'
                })
            ]
        }
    }
}