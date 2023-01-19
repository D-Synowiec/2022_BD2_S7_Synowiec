const express = require('express');
const bodyParser = require('body-parser');
const { models } = require('../sequelize');

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
        console.log(existsUser);
        if (existsUser) return res.status(201).send({
            res: "Account with that email, already exsists."
        });
        await newUser.save();
        res.status(200).send();
    } catch(e) {
        res.status(500).send(e);
    }


    // Check if user exsists
    
});

module.exports = app;