module.exports = (sequelize, type) => {
    const Role = sequelize.define('Role', {

        name: type.STRING
    });
    Role.associate = models => {
        Role.hasMany(models.User);
        Role.belongsToMany(models.Permission, {through: models.Permissiondetail});
    };
    return Role;
}