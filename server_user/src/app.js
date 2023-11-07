const express = require('express');
const morgan = require('morgan');
const user_routes = require('./routes/user-routes');
const cors = require('cors');

const app = express();

app.set('port', 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//app.use(express.urlencoded({extends:false}));

app.use('/api/users', user_routes);

module.exports = app;
