const express = require('express');
const http = require('http');
const logger = require('log4js').getLogger('start');

const config = require('./config/config');
const db = require('./config/database-connection');

db.connect();

const app = exports.app = express();

require('./config/express')(app);
require('./routes')(app);

http.createServer(app).listen(process.env.PORT || config.port);
logger.info('=== BAIC SERVER ===');
logger.info(`App started in port -> ${(process.env.PORT || config.port)}`);
logger.info(`App started in env -> ${(process.env.NODE_ENV || 'development')}`);
logger.info(`Node version -> ${process.version}`);