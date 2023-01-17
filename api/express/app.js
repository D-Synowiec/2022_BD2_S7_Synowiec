const express = require('express');
const bodyParser = require('body-parser');

const routes = {
    // users: require('./routes/users'), 
    // #TODO: Insert all routes
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));