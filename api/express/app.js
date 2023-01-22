const express = require('express');
const bodyParser = require('body-parser');

const { models } = require('../sequelize');
const userRouter = require('./routers/user');
const app = express();

// Enable JSON
app.use(express.json())

// Routers
app.use(userRouter);



module.exports = app;