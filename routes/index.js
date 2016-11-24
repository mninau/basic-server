'use strict';

const fs = require('fs');
const path = require('path');

function requireFiles(files, filesPath, app) {
  for (let file of files) {
    if (file.indexOf('.js') !== -1) {
      let filePath = path.join(filesPath, file);
      const route = require('./' + filePath);
      route(app);
    }
  }
}

module.exports = function (app) {
  const routesPath = './';
  const apiRoutesPath = path.join(routesPath, 'api');
  const apiRoutesFiles = fs.readdirSync(path.join(__dirname, apiRoutesPath));
  requireFiles(apiRoutesFiles, apiRoutesPath, app);
};