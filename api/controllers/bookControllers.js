const sequelize = require('sequelize');
const multer = require('multer'); // up file

const Book = require('../../models').Book;
const Catalog = require('../../models').Catalog;
const User = require('../../models').User;
const Love = require('../../models').Love;

// get all book
exports.getAllBook = function (req, res){
    Book.findAll({raw: true}).then(arrBook => {
        res.json(arrBook)
    })
};

// get a book
exports.getBook = function(req, res){
    Book.findOne({
        where: {
            id: req.params.book_id
        },
        raw: true
    }).then(book => res.json(book))
};

// create a book
exports.createBook = function(req, res){
    console.log(req.file);
    Book.create({
        book_name: req.body.book_name,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        image: req.file.path,
        quatity: req.body.quatity,
        catalog_id: req.body.catalog_id
    }).then(book => res.json(book))
};

// get all book by catalog_id
exports.getBookByCatalogId = function(req, res){
    Book.findAll({
        where: {
            catalog_id: req.params.catalog_id
        },
        raw: true
    }).then(arrBook => res.json(arrBook))
};

// search book
exports.searchBook = function(req, res){
    Book.findAll({
        include: [Catalog],
        raw: true
    }).then(arrBook => res.json(arrBook))
};

//update book
exports.updateBook = function(req, res){
    Book.update({
        book_name: req.body.book_name,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        image: req.file.path,
        quatity: req.body.quatity,
        catalog_id: req.body.catalog_id
    },
    {
        where:{
            book_id: req.params.book_id
        }
    }).then(row => console.log(row))
};

// get bookLove of user
exports.getBookLove = function(req, res){
    Love.findAll({
        where: {
            user_id: req.params.user_id
        },
        include: [Book],
        raw: true
    }).then(arrBook => {
        let books = [];
        for(var i=0; i<arrBook.length; i++){
            var b = {
                user_id : arrBook[i].user_id,
                book_id: arrBook[i].book_id,
                book_name: arrBook[i]["Book.book_name"]
            };
            books.push(b);
        }
        res.json(arrBook);
    })
};