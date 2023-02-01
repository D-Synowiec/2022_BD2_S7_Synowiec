function applyRelations(sequelize) {
    const { Backup, Categorized_Gallery, Category, Gallery_Access, Gallery, Media_Dictonary, Media, Photo, Role, Tag, User } = sequelize.models;

    Media.belongsTo(Backup, { as: "backup", foreignKey: "backup_id"});
    Backup.hasMany(Media, { as: "Media", foreignKey: "backup_id"});
    Category.belongsTo(Category, { as: "Category", foreignKey: "CategoryId"});
    Category.hasMany(Category, { as: "Category_Categories", foreignKey: "CategoryId"});
    Categorized_Gallery.belongsTo(Category, { as: "Category", foreignKey: "CategoryId"});
    Category.hasMany(Categorized_Gallery, { as: "Categorized_Galleryies", foreignKey: "CategoryId"});
    Backup.belongsTo(Gallery, { as: "gallery_Gallery", foreignKey: "gallery"});
    Gallery.hasMany(Backup, { as: "Backups", foreignKey: "gallery"});
    Gallery_Access.belongsTo(Gallery, { as: "gallery_Gallery", foreignKey: "gallery"});
    Gallery.hasMany(Gallery_Access, { as: "Gallery_Accesses", foreignKey: "gallery"});
    Media.belongsTo(Media_Dictonary, { as: "type_Media_Dictonary", foreignKey: "type"});
    Media_Dictonary.hasMany(Media, { as: "Media", foreignKey: "type"});
    Categorized_Gallery.belongsTo(Gallery, { as: "Gallery", foreignKey: "GalleryId"});
    Gallery.hasMany(Categorized_Gallery, { as: "Categorized_Galleryies", foreignKey: "GalleryId"});
    Tag.belongsTo(Photo, { as: "photo", foreignKey: "photo_id"});
    Photo.hasMany(Tag, { as: "Tags", foreignKey: "photo_id"});
    User.belongsTo(Role, { as: "Role", foreignKey: "RoleId"});
    Role.hasMany(User, { as: "Users", foreignKey: "RoleId"});
    Gallery.belongsTo(User, { as: "gallery_owner_User", foreignKey: "gallery_owner"});
    User.hasMany(Gallery, { as: "Galleries", foreignKey: "gallery_owner"});
    Gallery_Access.belongsTo(User, { as: "user_User", foreignKey: "user"});
    User.hasMany(Gallery_Access, { as: "Gallery_Accesses", foreignKey: "user"});
    Photo.belongsTo(Gallery, { foreignKey: "galleries"});
    Gallery.hasMany(Photo, { foreignKey: "galleries"});

}


module.exports = { applyRelations };