const express = require('express');
const { Sequelize, models } = require('../../sequelize');
const auth = require('../middleware/auth');

const router = new express.Router();
// TODO: MANAGMENT SHOULD BE ADMIN THING
// Create category TODO: ADD ADMIN CHECK
// router.post('/api/category', auth, async (req, res) => {
//     const newCategory = models.Category.build({
//         name: req.body.name,
//         CategoryId: req.body.parent || null
//     });
//     try {
//         const existingCategory = await models.Category.findOne({
//             where: {
//                 name: req.body.name
//             }
//         });
//         if(existingCategory) return res.status(409).send({message: 'You have category with this name.'});
//         newCategory.save();
//         res.status(201).send(newGallery);
//     } catch (error) {
//         res.send(error);
//     }
// });

// Delete category (TODO: ADMINCHECK )
// router.delete('/api/category/:id', auth, async (req, res) => {
//     try {
//         await models.Category.destroy({
//             where: {
//                 id: req.params.id,
//                 gallery_owner: req.user.id
//             }
//         });
//         res.status(204).send();
//     } catch (error) {
//         res.status(400).send();
//     }
// });
// Get all categories
router.get('/api/category', auth, async (req, res) => {
    try {
        const categories = await models.Category.findAll();
        if(!categories) return res.status(404).send("Categories not found! Contact an admin!");
        return res.send(categories);
    } catch (error) {
        res.status(500).send();
    }
});

// Get all galleries with this category
router.get('/api/category/:cid', auth, async (req, res) => {
    try {
        const galleries = await models.Categorized_Gallery.findAll({
            where: {
                id: req.params.cid
            },
            attributes: [],
            include: {
                model: models.Gallery,
                as: 'Gallery',
                where: {
                    gallery_owner: req.user.id
                }
            }
        });
        if(!galleries) res.status(404).send({"message": "Galleries not found :("});
        res.send(galleries);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

// Add category to gallery
router.post('/api/category/:cid', auth, async (req, res) => {
        const newCategorized = models.Categorized_Gallery.build({
            ...req.body,
            CategoryId: req.params.cid
        });
    try {
        const vibeCheck = await models.Categorized_Gallery.findOne({
            where: {
                CategoryId: req.params.cid,
                GalleryId: req.body.GalleryId
            },
            include: {
                model: models.Gallery,
                as: 'Gallery',
                where: {
                    gallery_owner: req.user.id
                }
            }
        });
        if (vibeCheck) return res.status(409).send({"message": "This gallery already belongs to this category."});
        await newCategorized.save();
        res.status(201).send();
    } catch (error) {
        res.status(500).send();
    }
});

// Remove category from gallery
router.delete('/api/category/:cid', auth, async (req, res) => {
    try {
        const vibeCheck = await models.Categorized_Gallery.findOne({
            where: {
                CategoryId: req.params.cid,
                GalleryId: req.body.GalleryId
            },
            include: {
                model: models.Gallery,
                as: 'Gallery',
                where: {
                    gallery_owner: req.user.id
                },
            }
        });
        console.log(vibeCheck);
        if(!vibeCheck) return res.status(404).send("You shound'nt be here :)");
        await vibeCheck.destroy();
        return res.status(204).send("Deleted");

    } catch (error) {
        res.status(500).send();
    }
    

});

module.exports = router;