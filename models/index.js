'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//FOR DEBUG
var files = fs.readdirSync(__dirname)
  .filter(function (file) {
    // console.log((file.indexOf('.') !== 0));
    // console.log((file !== basename));
    // console.log((file !== 'index.js'));
    // console.log((file.slice(-3) === '.js'));
    return (file.indexOf('.') !== 0) &&
      (file !== basename) &&
      (file !== 'index.js') &&
      (file.slice(-3) === '.js');
  });

//FOR DEBUG
files.forEach((file) => {
  var test = path.join(__dirname, file);
  var model = sequelize['import'](test);
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;