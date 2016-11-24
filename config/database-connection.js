'use strict';

const mongoose = require('mongoose');
const logger = require('log4js').getLogger('start');
const config = require('./config');

exports.connect = function connect() {
  mongoose.connect(config.db);
  let db = mongoose.connection;
  db.on('open', () => logger.info(`Connected ${config.db}`));
  db.on('error',  function (err) {
    logger.error(err);
    throw new Error(`Unable to connect to database: ${config.db}`);
  });
};
