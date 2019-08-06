module.exports = (sequelize, type) => {
    const Orderdetail = sequelize.define('Orderdetail', {
       
        amount: {
            type: type.INTEGER,
        },
        quatity: {
            type: type.INTEGER,
        }
    });
    Orderdetail.associate = models => {
        Orderdetail.belongsTo(models.Order);
        Orderdetail.belongsTo(models.Book);
    };
    
    return Orderdetail;
}