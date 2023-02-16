const express = require('express');
const sharp = require('sharp');
const multer = require('multer');
const { Sequelize, models } = require('../../sequelize');
const auth = require('../middleware/auth');

const router = new express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Add photo (duh) #FIXME: Not checking if he can add to gallery
router.post('/api/photo/add', auth, upload.single('photo_file'), async (req, res) => {
    try {
        const photo = await models.Photo.create({
            photo_file: req.file.buffer,
            owner: req.body.owner,
            name: req.body.name,
            size: req.body.size,
            resolution: "Soon", // FIXME:
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


        const base64Image = Buffer.from(compressedImage).toString('base64');
        
        res.send({
            image: `data:image/jpeg;base64,${base64Image}`
        });
 

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/api/photo/:pid', auth, async (req, res) => {
    try {
        const image = await models.Photo.findByPk(req.params.pid, {
            include: {
                model: models.Gallery,
                attributes: ['gallery_owner', 'id']
            }
        });
        if (!image || image.Gallery.gallery_owner !== req.user.id) return res.status(404).send({error: 'Image not found :('});
        const base64Image = Buffer.from(image.photo_file).toString('base64');
        
        res.send({
            image: `data:image/jpeg;base64,${base64Image}`
        });

    
    } catch (error) {
        res.status(503).send(error);
    }
});
// Metadata about photo #TODO: Permision check :)
router.get('/api/photo/:pid/info', auth, async (req, res) => { 
    try {
        const image = await models.Photo.findByPk(req.params.pid, {
            attributes: ['name', 'size', 'extension', 'owner'],
            include: {
                model: models.Tag,
                as: "Tags",
                attributes: ['name']
            }
        });
        if(!image) return res.status(404).send();

        return res.send(image);

    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

// Delete photo
router.delete('/api/photo/:pid', auth, async (req, res) => {
    try {
        const image = await models.Photo.findByPk(req.params.pid);
        if (!image) return res.status(404).send();
        // TODO: Check permision :)

        await image.destroy();
        return res.send();
    } catch (e) {
        res.status(503).send(e);
    }
});

// Find photo/gallery
router.get('/api/find', auth, async (req, res) => {
    try {
        if(req.query.type == "1") { // Gallery
            const galleries = await models.Gallery.findAll({
                where: {
                    name: req.query.name,
                    gallery_owner: req.user.id
                }
            });
            if (!galleries) return res.status(404).send();

            return res.send(galleries);
        }
        if(req.query.type == "2") { // Photo
            let photos = await models.Photo.findAll({
                where: {
                    name: req.query.name
                },
                include: [{
                    model: models.Gallery,
                    attributes: ['gallery_owner', 'id']
                }],
                attributes: ['id', 'name']
            });
            if (!photos) return res.status(404).send();
            photos = photos.filter(photo => photo.Gallery.gallery_owner == req.user.id);
            return res.send(photos);
        }
        if(req.query.type == "3") { // Tag
            let photos = await models.Tag.findAll({
                where: {
                    name: `#${req.query.name}`
                },
                include: {
                    model: models.Photo,
                    as: 'photo',
                    attributes: ['id', 'name'],
                    include: {
                        model: models.Gallery,
                        attributes: ['gallery_owner', 'id']
                    }
                }
            });
            console.log(photos);
            if (!photos) return res.status(404).send();
            photos = photos.filter(tag => tag.photo.Gallery.gallery_owner == req.user.id);
            return res.send(photos);
        }
    } catch (error) {
        console.log(error);
        res.status(504).send(error)
    }
});
module.exports = router;

