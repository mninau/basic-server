'use strict';

const morgan = require('morgan');

morgan.format('statusColored', function (req, res) {
  const status = res.statusCode;
  let color = 32;
  if (status >= 500) {
    color = 31;
  } else if (status >= 400) {
    color = 33;
  } else if (status >= 300) {
    color = 36;
  }

  return '\x1b[' + color + 'm' + status;
});

morgan.format('ip', function (req) {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || '';
  return ip;
});

module.exports = morgan;