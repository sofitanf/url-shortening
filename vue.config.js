const Dotenv = require('dotenv-webpack')

module.exports = {
    configureWebpack: {
        plugins: [new Dotenv()],
    },
    devServer: {
        proxy: 'https://api-ssl.bitly.com/',
    },
}