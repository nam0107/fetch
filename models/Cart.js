module.exports = (sequelize, type) => {
    const Cart = sequelize.define('Cart', {
        
        
        total_amount: {
            type: type.INTEGER,
        }
    });
    Cart.associate = models => {
        Cart.belongsToMany(models.Book, {through: models.Cartdetail});
    };
    return Cart;
}