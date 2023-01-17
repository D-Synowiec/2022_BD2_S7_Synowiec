const { Sequelize } = require('sequelize');
const { applyRelations } = require('./relations')
require('dotenv').config();

const sequelize = new Sequelize(process.env.PGLINK);

const modelDefiners = [
    require('./models/backup.model'),
    require('./models/categorized_photos.model'),
    require('./models/category.model'),
    require('./models/gallery.model'),
    require('./models/gallery_access.model'),
    require('./models/media.model'),
    require('./models/media_dictonary.model'),
    require('./models/photo.model'),
    require('./models/role.model'),
    require('./models/tags.model'),
    require('./models/user.model')
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

applyRelations(sequelize);


module.exports = sequelize;