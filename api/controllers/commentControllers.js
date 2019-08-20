const sequelize = require('sequelize');
const Comment = require('../../models').Comment;


// get all comment by book id
exports.getAllComment = function(req, res){
    Comment.findAll({
        where: {book_id: req.params.book_id},
        raw: true
    }).then(comments => res.json(comments))
};

// get comment by cmt_id and book_id
exports.getComment = function(req, res){
    Comment.findOne({
        where: {
            book_id: req.params.book_id,
            id: req.params.cmt_id
        },
        raw: true
    }).then(comment => res.json(comment))
};