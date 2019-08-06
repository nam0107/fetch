module.exports = (sequelize, type) => {
    const Love = sequelize.define('Love', {
        
    });
    Love.associate = models => {
        Love.belongsTo(models.Book);
        Love.belongsTo(models.User);
    };
    return Love;
}