// const { createProxyMiddleware } = require('http-proxy-middleware');
// const { config } = require('../api/config.js');

// module.exports = function (app) {
//   app.use(
//     '/graphql',
//     createProxyMiddleware({
//       target: config.SERVICE_URI,
//       changeOrigin: true,
//     }),
//   );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');
const { config } = require('../api/config.js');

module.exports = function (app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: config.SERVICE_URI,
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxying request:', req.path);
      },
      onError: (err, req, res) => {
        console.error('Proxy error:', err);
      },
      logLevel: 'debug', // This will give you more details about what happens in the proxy
    }),
  );
};
