// This is just a tiny development server to wrap
// Next.js plus a mocked API

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const throttle = parseInt(process.env.THROTTLE, 10) || 0;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const articles = require('../mocks/get-features.json');

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get('/api/features', (req, res) => {
    setTimeout(() => {
      res.send(articles);
    }, throttle);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    if (throttle) {
      console.info(`🐌 Responses are throttled by ${throttle}ms`);
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
