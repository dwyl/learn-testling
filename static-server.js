var http = require('http');
var index = require('fs').readFileSync(__dirname+'/test.html');
http.createServer(function (req, res) {
  console.log("URL:",req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(process.env.PORT || 3000);
