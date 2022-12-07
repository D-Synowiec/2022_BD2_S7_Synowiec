const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user');
const { pool } = require('./db');
const app = express();
const port = process.env.PORT || 5000;


//app.use(express.json());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

//app.use(userRouter);

app.get('/test', (req, res) => {
    pool.query('SELECT * FROM public."Roles"', (error, results) => {
        if (error) throw error;
        
        res.status(200).json(results.rows);
    }) 
})


app.listen(port, () => {
    console.log(`Server up and listining on ${port}`);

});
