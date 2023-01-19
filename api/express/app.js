const express = require('express');
const bodyParser = require('body-parser');
const { models } = require('../sequelize');
const auth = require('./middleware/auth')
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json())



// app.get('/api/test', async (req, res) => {
//     console.log('/api/test hit!');
//     try {
//         const roles = await models.Media.findOne({
//             where: {
//                 id: 1
//             },
//             include: {
//                 model: models.Media_Dictonary,
//                 as: 'type_Media_Dictonary'
//             }
//         });
//         console.log('Im in query!');
//        res.status(200).send(roles);``
//     } catch (error) {
//         res.status(500);
//     }
// });

// Endpoint for register a user
app.post('/api/user', async (req, res) => {
    const newUser = models.User.build(req.body);
    try {
        const existsUser = await models.User.findOne({
            where: {
                email: req.body.email
            }
        
        });
        if (existsUser) return res.status(201).send({
            res: "Account with that email, already exsists."
        });
        await newUser.save();
        res.status(200).send();
    } catch(e) {
        res.status(500).send(e);
    }    
});

app.get('/api/user/me', auth, async (req, res) => {
    res.send(req.user);


});
app.post('/api/user/login', async (req, res) => {
    //TODO: Make function (on model please) to find it
    try {
        const user = await models.User.findOne({
            where: {
                login: req.body.login,
                password_hash: req.body.password
            }
        });
        if(!user) {
            return res.status(203).send({
                "message": "Bad login or password"
            });
        }
        const token = jwt.sign({
            id: user.id
        }, process.env.JWT);
        console.log(user.tokens);
        await user.update({
            tokens: user.tokens.concat(token)
        });
        return res.status(202).send({
            "tokens": token
        });

    } catch (error) {
        res.status(500).send({
            "error": error
        })
    }

});

app.get('/api/user/:id', async (req, res) => {

});

module.exports = app;