const express = require('express');
const router = require('./Routes');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(helmet());
server.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://http2.mlstatic.com'],
    },
  })
);

server.use(cors());

server.use(router);

module.exports = server;
