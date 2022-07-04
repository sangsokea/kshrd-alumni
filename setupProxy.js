const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        createProxyMiddleware('/profiles', {
            target: process.env.REACT_APP_BASE_URL,
            changeOrigin: true
        })
    )
}