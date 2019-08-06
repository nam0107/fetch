module.exports = (sequelize, type) => {
    const User = sequelize.define('User', {
        
        user_name: {
            type: type.STRING,
            unique: true
        },
        email: {
            type: type.STRING,
            unique: true
        },
        password: {
            type: type.STRING
        },
        status: {
            type: type.INTEGER,
        }
    });
    User.associate = models => {
        User.belongsTo(models.Role);
        User.hasMany(models.Order);
        User.hasMany(models.Cart);
        User.belongsToMany(models.Book, {through: models.Comment});
        User.belongsToMany(models.Book, {through: models.Love});
    };
    return User;
}