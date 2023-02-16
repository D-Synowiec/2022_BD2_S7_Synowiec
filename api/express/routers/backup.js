const express = require('express');
const { Sequelize, models } = require('../../sequelize');
const auth = require('../middleware/auth');


const router = new express.Router();

router.post('/api/:gid/backups', auth, async (req, res) => {
    try {
        await sequelize.transaction(async (t) => {
            // const newBackup = await models.Backup.create({
            //     gallery: req.params.gid
         
            //  }, { transaction: t });
             // const mediaID = // TODO: find id of media by name
 
        });
        return res.status(201).send();
    } catch (error) {
        res.send(error)
    }

});

module.exports = router;