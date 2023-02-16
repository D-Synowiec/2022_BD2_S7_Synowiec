const express = require('express');
const { Sequelize, models } = require('../../sequelize');
const auth = require('../middleware/auth');

const router = new express.Router();
// Add tag to photo #TODO: Vibe check
router.post('/api/photo/:pid/tag', auth, async (req, res) => {
    try {
        const newTag = await models.Tag.create({
            name: `#${req.body.name}`,
            photo_id: req.params.pid
        });
        return res.status(201).send(newTag);
    } catch (error) {
        res.status(503).send(error);
    }
});

// Remove tag from photo
router.delete('/api/photo/:pid/tag', auth, async (req, res) => {
    try {
        const tagToDelete = await models.Tag.findOne({
            where: {
                photo_id: req.params.pid,
                name: req.body.name
            }
        });
        if (!tagToDelete) return res.status(404).send();
        tagToDelete.destroy();
        return res.send();
    } catch (error) {
        res.status(503).send(error);
    }
});

module.exports = router;