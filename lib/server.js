var fs = require('fs');
var path = require('path');
var httpolyglot = require('httpolyglot');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

module.exports = function(webpackConfig, serverOpts) {
  var app = express();

  function useConfig(config) {
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, config.devMiddleware));
    app.use(webpackHotMiddleware(compiler, config.hotMiddleware));
  }

  if (Array.isArray(webpackConfig)) {
    webpackConfig.forEach(useConfig);
  } else {
    useConfig(webpackConfig);
  }

  var host = serverOpts.host || 'localhost';
  var port = serverOpts.port || 8000;
  httpolyglot.createServer(
    {
      key: serverOpts.key || fs.readFileSync(path.join(__dirname, '../ssl/server.key')),
      cert: serverOpts.cert || fs.readFileSync(path.join(__dirname, '../ssl/server.crt')),
      ca: serverOpts.cacert || fs.readFileSync(path.join(__dirname, '../ssl/ca.crt'))
    },
    app
  ).listen(port, host, function() {
    if (serverOpts.noLog) return;
    console.log('[webpack-httpolyglot-server]', 'http(s)://' + host + ':' + port);
  });

  return app;
};
