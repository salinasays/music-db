const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//listen on port 8888
app.listen('8888', () => console.log('Listening on port 8888'));


//////////
// YOUR CODE HERE:
//////////

app.use('/api', require('./routers'))