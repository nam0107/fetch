const { check, validationResult } = require('express-validator');
const validator = require('../../validator/validator.js');
const multer = require('multer'); // up file
const storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './uploads/');
	},
	filename: function(req, file, cb){
		cb(null, file.originalname);
	} 
});
const upload = multer({
	storage: storage
});
module.exports = function (app) {
	const userController = require("../controllers/userControllers.js");
	// user Routes
	app.route('/users/login')
		.post(userController.login);
	app.route('/users/register')
		.post(validator.validatorUser, userController.register);
	app.route('/users')
		.get(userController.getAllUser);
	app.route('/users/:user_id')
		.delete(userController.delUser)
		.get(userController.getUser)
		.put(userController.updateUser);

	// book Routes
	const bookController = require("../controllers/bookControllers.js");
	app.route('/books')
		.post(upload.single('book_image'), bookController.createBook) // book_image là 1 trường trong form-data
		.get(bookController.getAllBook);
	app.route('/books/:book_id')
		.put(upload.single('book_image'),bookController.updateBook)
		.get(bookController.getBook);
	app.route('/books/catalogs/:catalog_id')
		.get(bookController.getBookByCatalogId);
	app.route("/testSearch")
		.get(bookController.searchBook);
	app.route('/users/:user_id/wishlist')
		.get(bookController.getBookLove);

	// comment routes
	const commentController = require("../controllers/commentControllers.js");
	app.route('/books/:book_id/comment')
		.get(commentController.getAllComment);
	app.route('/books/:book_id/comment/:cmt_id')
		.get(commentController.getComment);

	// order routes
	const orderController = require("../controllers/orderControllers.js");
	app.route('/users/:user_id/orders')
		.get(orderController.getOrderByUserId);
	app.route('/users/:user_id/orders')
		.post(orderController.createOrder);
	app.route('/users/:user_id/orders/:order_id')
		.put(orderController.updateOrder)
		.delete(orderController.deleteOrder)
		.get(orderController.getOrderByUserIdAndOrderId);
};
