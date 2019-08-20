module.exports = (sequelize, type) => {
    const Cartdetail = sequelize.define('Cartdetail', {
       
        amount: {
            type: type.INTEGER,
        },
        quatity: {
            type: type.INTEGER,
        }
    });
    Cartdetail.associate = models => {
        Cartdetail.belongsTo(models.Order);
        Cartdetail.belongsTo(models.Book);
    };
    return Cartdetail;
}