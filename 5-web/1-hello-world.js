const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello jhfjksad\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
