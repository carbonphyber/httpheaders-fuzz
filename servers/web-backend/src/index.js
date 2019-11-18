/* eslint-env node */
const http = require('http');

const {
  PORT: port = 80,
  LISTEN: listenRaw,
} = process.env;

const listenLocalhost = '127.0.0.1';
const listenAll = '0.0.0.0';
const listen = [listenAll, listenLocalhost].includes(listenRaw)
  ? listenRaw
  : listenLocalhost;

const server = http.createServer((req, res) => {
  const { headers, rawHeaders } = req;
  console.log({
    headers,
    rawHeaders,
  });
  const { socket } = res || {};
  const {
    remoteAddress: reqIp,
    remotePort: reqPort,
  } = socket || {};
  const body = `Your IP address is ${reqIp} and your source port is ${reqPort}.`;
  res.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'text/plain'
    })
    .end(body);
}).listen(port, listen);
