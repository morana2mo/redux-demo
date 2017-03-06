
var path = require('path');
var express = require('express');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));


app.all('/db/*', function (req, res) {
  proxy.web(req, res, {
    target: 'https://glowing-carpet-4534.firebaseio.com'
  });
});

if (!isProduction) {

	var bundle = require('./server/bundle.js');
  	bundle();

  	app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });
}
// var compiler = webpack(config)

// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))

// app.use(webpackHotMiddleware(compiler))

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + '/index.html')
// })

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});