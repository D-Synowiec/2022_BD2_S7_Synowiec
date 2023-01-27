const express = require('express');
const sharp = require('sharp');
const multer = require('multer');
const { Sequelize, models } = require('../../sequelize');
const auth = require('../middleware/auth');

const router = new express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Add photo (duh)
router.post('/api/photo/add', auth, upload.single('photo_file'), async (req, res) => {
    try {
        const photo = await models.Photo.create({
            photo_file: req.file.buffer,
            owner: req.body.owner,
            name: req.body.name,
            size: 3, // TODO: Calculate it somehow xD
            resolution: "FIXME", // FIXME:
            extension: req.body.extension,
            galleries: req.body.galleries
        });
        res.status(201).send(photo);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get photo minature by id
router.get('/api/image/:id', auth, async (req, res) => {
    try {
        const image = await models.Photo.findByPk(req.params.id, {
            include: {
                model: models.Gallery,
                attributes: ['gallery_owner', 'id']
            }
        });
        
        if (!image || image.Gallery.gallery_owner !== req.user.id) return res.status(404).send({error: 'Image not found :('});
        // Resize photo
        const compressedImage = await sharp(image.photo_file)
            .resize(800, 800)
            .toBuffer();

        res.contentType('image/jpeg');
        res.send(compressedImage);
 

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Get all miniatures from gallery #TODO: SPlit anwser in parts

// Get full size photo by id




module.exports = router;

