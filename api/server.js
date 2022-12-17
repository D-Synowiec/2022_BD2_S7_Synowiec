const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user');
const { pool } = require('./db/db');
const app = express();
const port = process.env.PORT || 5000;


//app.use(express.json());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(userRouter);


app.listen(port, () => {
    console.log(`Server up and listining on ${port}`);

});
