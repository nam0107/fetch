const express = require("express");
const sequelize = require('sequelize');
const bodyParser = require("body-parser");

const routes = require(__dirname + '/api/routes/routes.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/user', passport.authenticate('jwt', {session: false}), user);

const User = require('./models').User;
const Book = require('./models').Book;
require(__dirname + "/api/controllers/passport.js");
routes(app);

// Comment.findOne({
//     // include: [Role],
//     raw: true
// }).then(arr => 
//     console.log(arr)
// )

// Book.create({
//     book_name: "dsd",
//     author: "asdsa",
//     price: 10,
//     description: "asdsad",
//     image: "asdsad",
//     quatity: 9,
//     catalog_id: 1
// }).then(book => console.log(book.get({ plain: true })))

// user.findByPk(1).then(user => console.log(user.user_name))
// user.findOne({ where: { user_name: 'thnam' } }).then(user => console.log(user.user_name))

app.listen(3000, function () {
    console.log('Node server running @ http://localhost:3000')
});