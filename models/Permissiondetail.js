module.exports = (sequelize, type) => {
    const Permissiondetail = sequelize.define('Permissiondetail', {
        
    });
    Permissiondetail.associate = models => {
        Permissiondetail.belongsTo(models.Permission);
        Permissiondetail.belongsTo(models.Role);
    };
    return Permissiondetail;
}