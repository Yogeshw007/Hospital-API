const express = require('express');
const mongoose = require('mongoose');

// Initialize DB(mongoose)
const db = require('./config/mongoose');

// JWT for authentication
const passportJWT = require('./config/passport-jwt-startegy');

// Initialize app
const app = express();

// Parse the request body - middleware
app.use(express.urlencoded());

app.use('/', require('./routes'));

let port = process.env.PORT || 8000;
app.listen(port, () => console.log('Server is up and running on PORT : ' + port));