function applyRelations(sequelize) {
    const { Backup, Categorized_Gallery, Category, Gallery_Access, Gallery, Media_Dictonary, Media, Photo, Role, Tag, User } = sequelize.models;

    Media.belongsTo(Backup, { as: "backup", foreignKey: "backup_id", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Backup.hasMany(Media, { as: "Media", foreignKey: "backup_id", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Category.belongsTo(Category, { as: "Category", foreignKey: "CategoryId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Category.hasMany(Category, { as: "Category_Categories", foreignKey: "CategoryId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Categorized_Gallery.belongsTo(Category, { as: "Category", foreignKey: "CategoryId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Category.hasMany(Categorized_Gallery, { as: "Categorized_Galleryies", foreignKey: "CategoryId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Backup.belongsTo(Gallery, { as: "gallery_Gallery", foreignKey: "gallery", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Gallery.hasMany(Backup, { as: "Backups", foreignKey: "gallery", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Gallery_Access.belongsTo(Gallery, { as: "gallery_Gallery", foreignKey: "gallery", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Gallery.hasMany(Gallery_Access, { as: "Gallery_Accesses", foreignKey: "gallery", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Media.belongsTo(Media_Dictonary, { as: "type_Media_Dictonary", foreignKey: "type", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Media_Dictonary.hasMany(Media, { as: "Media", foreignKey: "type", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Categorized_Gallery.belongsTo(Gallery, { as: "Gallery", foreignKey: "GalleryId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Gallery.hasMany(Categorized_Gallery, { as: "Categorized_Galleryies", foreignKey: "GalleryId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Tag.belongsTo(Photo, { as: "photo", foreignKey: "photo_id", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Photo.hasMany(Tag, { as: "Tags", foreignKey: "photo_id", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    User.belongsTo(Role, { as: "Role", foreignKey: "RoleId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Role.hasMany(User, { as: "Users", foreignKey: "RoleId", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Gallery.belongsTo(User, { as: "gallery_owner_User", foreignKey: "gallery_owner", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    User.hasMany(Gallery, { as: "Galleries", foreignKey: "gallery_owner", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Gallery_Access.belongsTo(User, { as: "user_User", foreignKey: "user", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    User.hasMany(Gallery_Access, { as: "Gallery_Accesses", foreignKey: "user", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Photo.belongsTo(Gallery, { foreignKey: "galleries", onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    Gallery.hasMany(Photo, { foreignKey: "galleries", onDelete: 'CASCADE', onUpdate: 'CASCADE'});

}


module.exports = { applyRelations };