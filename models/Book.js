module.exports = (sequelize, type) => {
    const Book = sequelize.define('Book', {
        
        book_name: {
            type: type.STRING,
        },
        author: {
            type: type.STRING,
        },
        price: {
            type: type.INTEGER,
        },
        description: {
            type: type.STRING,
        },
        image: {
            type: type.STRING,
        },
        quatity: {
            type: type.INTEGER,
        },
        catalog_id: {
            type: type.INTEGER,
        }

    });

    Book.associate = models => {
        Book.belongsToMany(models.User, {through: models.Comment});
        Book.belongsToMany(models.Order, {through: models.Orderdetail});
        Book.belongsToMany(models.User, {through: models.Love});
        Book.belongsTo(models.Catalog);
        Book.belongsToMany(models.Cart, {through: models.Cartdetail});
    };
    return Book;
}