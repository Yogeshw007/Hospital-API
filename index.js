const express = require('express');
const mongoose = require('mongoose');

const db = require('./config/mongoose');
const passportJWT = require('./config/passport-jwt-startegy');

const app = express();

app.use(express.urlencoded());

app.use('/', require('./routes'));

let port = process.env.PORT || 8000;
app.listen(port, () => console.log('Server is up and running on PORT : ' + port));