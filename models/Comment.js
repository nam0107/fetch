module.exports = (sequelize, type) => {
    const Comment = sequelize.define('Comment', {
        
        content: {
            type: type.STRING,
        },
        status: {
            type: type.INTEGER,
        },
        user_id: {
            type: type.INTEGER,
            references: {
                model: 'User',
                key: 'user_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
        
    });
    Comment.associate = models => {
       
    };
    return Comment;
}