explorer.exe .const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('TEST VERSION AUTO');
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});
