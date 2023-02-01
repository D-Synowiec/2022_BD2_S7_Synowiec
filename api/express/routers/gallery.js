const express = require('express');
const { Sequelize, models } = require('../../sequelize');
const auth = require('../middleware/auth');

const router = new express.Router();

// Create new gallery
router.post('/api/gallery', auth, async (req, res) => {
    const newGallery = models.Gallery.build({
        name: req.body.name,
        gallery_owner: req.user.id

    });

    try {
         const existingGallery =  await models.Gallery.findOne({
            where: {
                name: req.body.name
            },
            include: [{
                model: models.User,
                as: 'gallery_owner_User',
                where: {
                    id: req.user.id
                }
            }]
        });
        if(existingGallery) return res.status(409).send({message: 'You have gallery with this name.'});
        newGallery.save();
        return res.status(201).send(newGallery);
    } catch (error) {
        console.log(error);
        res.send(error);
    }

});
// Informations about gallery (without photos)
// Get my galleries 
router.get('/api/gallery/me', auth, async (req, res) => {
    try {
        const galleries = await models.Gallery.findAll({
            where: {
                gallery_owner: req.user.id
            }       
        });
        if(!galleries) return res.status(404);
        return res.status(200).send(galleries);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get gallery by id
router.get('/api/gallery/:id', auth, async (req, res) => {
    try {
        const gallery = await models.Gallery.findOne({
            where: {
                id: req.params.id,
                gallery_owner: req.user.id
            }       
        });
        if(!gallery) return res.status(404).send();
        return res.status(200).send(gallery);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete gallery by id
router.delete('/api/gallery/:id', auth, async (req, res) => {
    try {
        await models.Gallery.destroy({
            where: {
                id: req.params.id,
                gallery_owner: req.user.id
            }
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).send();
    }
});

// Return metadata about photos, to get photo use photo endpoint TODO: ADD checking permisions
router.get('/api/gallery/:gid/photos', auth, async (req,res) => {
    try {
        const gallery = await models.Gallery.findByPk(req.params.gid, {
            include: {
                model: models.Photo,
                attributes: ['id', 'name']
            }
        });
        if (!gallery || req.user.id != gallery.gallery_owner) return res.status(404).send({message: "Gallery not found :("});
        res.send(gallery);
    } catch (error) {
        res.status(503).send(error);
    }
});

module.exports = router;