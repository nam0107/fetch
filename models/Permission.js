module.exports = (sequelize, type) => {
    const Permission = sequelize.define('Permission', {

        type_permission: type.STRING
    });
    Permission.associate = models => {
        Permission.belongsToMany(models.Role, {through: models.Permissiondetail});
    };
    return Permission;
}