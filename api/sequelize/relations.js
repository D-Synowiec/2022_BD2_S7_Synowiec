function applyRelations(sequelize) {
    const { Backup, Categorized_Photo, Category, Gallery_Access, Gallery, Media_Dictonary, Media, Photo, Role, Tag, User } = sequelize.models;

    Media.belongsTo(Backup, { as: "backup", foreignKey: "backup_id"});
    Backup.hasMany(Media, { as: "Media", foreignKey: "backup_id"});
    Category.belongsTo(Category, { as: "Category", foreignKey: "CategoryId"});
    Category.hasMany(Category, { as: "Category_Categories", foreignKey: "CategoryId"});
    Categorized_Photo.belongsTo(Category, { as: "Category", foreignKey: "CategoryId"});
    Category.hasMany(Categorized_Photo, { as: "Categorized_Photos", foreignKey: "CategoryId"});
    Backup.belongsTo(Gallery, { as: "gallery_Gallery", foreignKey: "gallery"});
    Gallery.hasMany(Backup, { as: "Backups", foreignKey: "gallery"});
    Gallery_Access.belongsTo(Gallery, { as: "gallery_Gallery", foreignKey: "gallery"});
    Gallery.hasMany(Gallery_Access, { as: "Gallery_Accesses", foreignKey: "gallery"});
    Media.belongsTo(Media_Dictonary, { as: "type_Media_Dictonary", foreignKey: "type"});
    Media_Dictonary.hasMany(Media, { as: "Media", foreignKey: "type"});
    Categorized_Photo.belongsTo(Photo, { as: "Photo", foreignKey: "PhotoId"});
    Photo.hasMany(Categorized_Photo, { as: "Categorized_Photos", foreignKey: "PhotoId"});
    Tag.belongsTo(Photo, { as: "photo", foreignKey: "photo_id"});
    Photo.hasMany(Tag, { as: "Tags", foreignKey: "photo_id"});
    User.belongsTo(Role, { as: "Role", foreignKey: "RoleId"});
    Role.hasMany(User, { as: "Users", foreignKey: "RoleId"});
    Gallery.belongsTo(User, { as: "gallery_owner_User", foreignKey: "gallery_owner"});
    User.hasMany(Gallery, { as: "Galleries", foreignKey: "gallery_owner"});
    Gallery_Access.belongsTo(User, { as: "user_User", foreignKey: "user"});
    User.hasMany(Gallery_Access, { as: "Gallery_Accesses", foreignKey: "user"});

}


module.exports = { applyRelations };