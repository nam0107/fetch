module.exports = (sequelize, type) => {
    const Catalog = sequelize.define('Catalog', {
        
        catalog_name: {
            type: type.STRING,
            unique: true
        },
        status: {
            type: type.INTEGER,
        }
    });
    Catalog.associate = models => {
        Catalog.hasMany(models.Book);
    }
    return Catalog;
}