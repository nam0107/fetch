module.exports = (sequelize, type) => {
    const Order = sequelize.define('Order', {
        
        total_amount: {
            type: type.INTEGER,
        },
        status: {
            type: type.INTEGER,
        }
    });
    Order.associate = models => {
        Order.belongsTo(models.User);
        Order.belongsToMany(models.Book, {through: models.Orderdetail});
        Order.hasMany(models.Orderdetail);
    };
    return Order;
}