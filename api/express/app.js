const express = require('express');
const bodyParser = require('body-parser');

const { models } = require('../sequelize');
const userRouter = require('./routers/user');
const galleryRouter = require('./routers/gallery')
const app = express();

// Enable JSON
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })

// Routers
app.use(userRouter);
app.use(galleryRouter);



module.exports = app;