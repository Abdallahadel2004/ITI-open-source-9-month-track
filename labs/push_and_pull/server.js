const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const TAKEN_USERNAMES = ['admin', 'john', 'guest', 'user123'];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // 1. GET API Endpoint: Check Username
  if (req.method === 'GET' && pathname === '/api/check-username') {
    const username = (parsedUrl.query.username || '').trim().toLowerCase();
    const isTaken = TAKEN_USERNAMES.includes(username);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ available: !isTaken }));
    return;
  }

  // 2. POST API Endpoint: Register User
  if (req.method === 'POST' && pathname === '/api/register') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const username = (data.username || '').trim();

        // Simple validation checks
        if (TAKEN_USERNAMES.includes(username.toLowerCase())) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ errors: { username: 'Username already exists.' } }));
          return;
        }

        // Add user to local list simulating registration
        TAKEN_USERNAMES.push(username.toLowerCase());

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: `Account created for ${username}!` }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ errors: { form: 'Invalid request data.' } }));
      }
    });
    return;
  }

  // 3. Static Files Serving
  let filename = 'index.html';
  let contentType = 'text/html';

  if (pathname === '/style.css') {
    filename = 'style.css';
    contentType = 'text/css';
  } else if (pathname === '/app.js') {
    filename = 'app.js';
    contentType = 'application/javascript';
  }

  const filePath = path.join(__dirname, filename);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`[LAB SERVER] Running at http://localhost:${PORT}/`);
});
