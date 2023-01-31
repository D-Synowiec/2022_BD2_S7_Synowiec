const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize, models } = require('../../sequelize');
const auth = require('../middleware/auth');
const router = new express.Router();

async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
  
  async function comparePassword(password, hash) {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }


// Register
router.post('/api/user', async (req, res) => {
    const role = await models.Role.findOne({
        where: {
            role_name: 'Basic_User'
        }
    });
    const hash = await hashPassword(req.body.password_hash);
    
    const newUser = models.User.build({
        ...req.body,
        RoleId: role.id,
        password_hash: hash
    });
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

// Get information about yourself
router.get('/api/user/me', auth, async (req, res) => {
    res.send(req.user);
});

// Get info about user by id

// Login
router.post('/api/user/login', async (req, res) => {
    //TODO: Make function (on model please) to find it
    try {
        const user = await models.User.findOne({
            where: {
                email: req.body.email
            }
        });
        const isMatch = await comparePassword(req.body.password, user.password_hash);
        if(!user || !isMatch) {
            return res.status(203).send({
                "message": "Bad email or password"
            });
        }
        const token = jwt.sign({
            id: user.id,
        }, process.env.JWT, {
            expiresIn: '30d'
        });
        await user.update({
            tokens: token
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
// Logout
router.post('/api/user/logout', auth, async (req, res) => {

    try {
        await req.user.update({
            tokens: null
        });
        res.send({
            "message": "Logout."
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

// Patch user TODO: Validate received information
router.patch('/api/user/me', auth, async (req, res) => {
    try {
        await models.User.update(req.body, {
            where: {
                id: req.user.id
            }
        });
        res.send();
    } catch (e) {
        res.status(500).send();
    }
})

// Delete user
router.delete('/api/user', auth, async (req, res) => {
    try {
        await req.user.destroy();
        res.send();
    } catch (e) {
        res.send(e);
    }
});


module.exports = router;
