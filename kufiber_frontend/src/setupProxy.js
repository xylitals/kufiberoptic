const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/products',
    createProxyMiddleware({
      target: "https://polar-sea-43535.herokuapp.com",
      changeOrigin: true,
    })
  );
};