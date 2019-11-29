const path = require('path')

module.exports = {
    chainWebpack: config => config.resolve.symlinks(false),
    configureWebpack: {
        resolve: {
            alias: {
                '@custom-sfcs': path.resolve(__dirname, 'node_modules/custom-sfcs/dist'),
            },
        },
    },
};
