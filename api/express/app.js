const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const corsOptions = {
   origin: '*', 
   credentials: true,
   optionSuccessStatus: 200,
}

 // Use this after the variable declaration

const { models } = require('../sequelize');
const userRouter = require('./routers/user');
const galleryRouter = require('./routers/gallery');
const photoRouter = require('./routers/photo');
const categoryRouter = require('./routers/category');
const app = express();

// Enable JSON
app.use(express.json());
app.use(cors(corsOptions));

// Routers
app.use(userRouter);
app.use(galleryRouter);
app.use(photoRouter);
app.use(categoryRouter);


module.exports = app;