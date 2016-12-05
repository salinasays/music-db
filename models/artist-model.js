const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

var Artist = sequelizeConnection.define('artist', {
  name: {
    type: Sequelize.STRING,
    validate: {
    	len: [1,100],
    	notEmpty: true
    }
  }
});

module.exports = Artist;
 