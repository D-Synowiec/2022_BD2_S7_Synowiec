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
router.get('/api/image/miniature/:id', auth, async (req, res) => {
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
            .resize(300, 300)
            .toBuffer();

        // res.contentType('image/jpeg');
        // res.send(compressedImage);
                // encode image data as base64
        const base64Image = Buffer.from(compressedImage).toString('base64');
        
        res.send({
            image: `data:image/jpeg;base64,${base64Image}`
        });
 

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get full size photo by id TODO: checking gallery
router.get('/api/:gid/:pid', auth, async (req, res) => {
    try {
        const image = await models.Photo.findByPk(req.params.pid, {
            include: {
                model: models.Gallery,
                attributes: ['gallery_owner', 'id']
            }
        });

        if (!image || image.Gallery.gallery_owner !== req.user.id || image.Gallery.id != req.params.gid) return res.status(404).send({error: 'Image not found :('});
        const bufferImage = await sharp(image.photo_file).toBuffer();
        res.contentType('image/jpeg');
        res.send(bufferImage);  
        

    } catch (error) {
        res.status(503).send(error);
    }
});



module.exports = router;

