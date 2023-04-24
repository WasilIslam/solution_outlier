const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") return respondHello(req, res);
  else if (req.url === "/user-agent") return respondUserAgent(req, res);
  res.end();
});

function respondHello(req, res) {
  res.end(JSON.stringify({ msg: "hello" }));
}

function respondUserAgent(req, res) {
  res.end(JSON.stringify({ user_agent: "123" }));
}

server.listen(PORT);
console.log(`Server listening on port ${PORT}`);

if (require.main !== module) module.exports = server;
