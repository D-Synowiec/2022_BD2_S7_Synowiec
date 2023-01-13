const { Sequelize } = require('sequelize');

// Adding all models
const Category = require('./category');
const Tag = require('./tags');
const Photo = require('./photo');
const User = require('./user');
const Role = require('./role');

// Category relations
Category.hasMany(Category, {
    as: 'Parent',
    foreignKey: parent_category
});
Category.belongsTo(Category);

// Tags
Tag.hasMany(Photo, {
    foreignKey: photo_id
});

Photo.belongsTo(Tag);

// Categorized_Photos
// TODO: Write it

// User
User.hasMany(Role, {
    foreignKey: role
});
Role.belongsTo(User);

// Gallery
