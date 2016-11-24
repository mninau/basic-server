'use strict';

const bodyParser = require('body-parser');
const config = require('./config');
const morgan = require('./morgan');

module.exports = function (app) {
  // app port
  app.set('port', config.port);
  app.set('x-powered-by', false);

  // bodyparser
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

  //morgan config
  app.use(morgan('\x1b[90m:method :url :statusColored :response-time ms - \x1b[37m:ip'));
};