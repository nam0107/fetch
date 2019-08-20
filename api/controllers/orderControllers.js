const Order = require('../../models').Order;
const Orderdetail = require('../../models').Orderdetail;
const User = require('../../models').User;
const Book = require('../../models').Book;

// get order by user_id
exports.getOrderByUserId = (req, res) => {
    Order.findAll({
        where: {
            user_id: req.params.user_id
        },
        include: [Orderdetail, Book],
        raw: true,
    }).then(arr => {
        res.json(arr)
    })
};

// create order
exports.createOrder = async function (req, res) {
    let orderDetails = [];
    let check = 1;
    await req.body.forEach(orderDetail => {
        Book.findOne({
            where: {
                id: orderDetail.book_id
            }
        }).then(book => {
            let oD = {
                book_id: orderDetail.book_id,
                quatity: orderDetail.quatity,
                amount: orderDetail.quatity * book.price
            };
            orderDetails.push(oD);

        })

    })
    let total_amount = 0;
    try {
        await User.findOne({
            where: {
                id: req.params.user_id
            }
        }).then(user => {
            orderDetails.forEach(oD => {
                total_amount += oD.amount;
            });
            user.createOrder({
                user_id: req.params.user_id,
                total_amount: total_amount,
                status: 1,
            }).then(order => {
                orderDetails.forEach(oD => {
                    Book.findOne({
                        where: {
                            id: oD.book_id
                        }
                    }).then(book => {
                        order.addBook(book, {
                            through: {
                                amount: oD.amount,
                                quatity: oD.quatity
                            }
                        })
                    })
                });
            })
        })
    } catch (error) {
        console.log(error);
        check = 0;
    }
    if (check === 0) res.status(404).send({ mess: "err" });
    else { res.status(200).send("done!"); }

};

//update order
exports.updateOrder = async function (req, res) {
    let orderDetails = [];
    let check = 1;
    await req.body.forEach(orderDetail => {
        Book.findOne({
            where: {
                id: orderDetail.book_id
            }
        }).then(book => {
            let oD = {
                book_id: orderDetail.book_id,
                quatity: orderDetail.quatity,
                amount: orderDetail.quatity * book.price
            };
            orderDetails.push(oD);

        })

    })
    let total_amount = 0;
    try {
        await User.findOne({
            where: {
                id: req.params.user_id
            }
        }).then(user => {
            orderDetails.forEach(oD => {
                total_amount += oD.amount;
            });
            Order.update({
                total_amount: total_amount,
                status: 1,
            },
                {
                    where: {
                        user_id: req.params.user_id,
                        id: req.params.order_id,
                    }
                }).then(row => {
                    Orderdetail.destroy({
                        where: {
                            order_id: req.params.order_id
                        }
                    })
                    Order.findOne({
                        where: {
                            id: req.params.order_id,
                            user_id: req.params.user_id
                        }
                    }).then(order => {
                        orderDetails.forEach(oD => {
                            Book.findOne({
                                where: {
                                    id: oD.book_id
                                }
                            }).then(book => {
                                order.addBook(book, {
                                    through: {
                                        amount: oD.amount,
                                        quatity: oD.quatity
                                    }
                                })
                            })
                        });
                    })
                })
        })
    } catch (error) {
        console.log(error);
        check = 0;
    }
    if (check === 0) res.status(404).send({ mess: "err" });
    else { res.status(200).send("done!"); }

};

// get order by user_id order_id
exports.getOrderByUserIdAndOrderId = (req, res) => {
    Order.findAll({
        where: {
            user_id: req.params.user_id,
            id: req.params.order_id
        },
        include: [Orderdetail, Book],
        raw: true,
    }).then(arr => {
        res.json(arr)
    })
};

// delete order
exports.deleteOrder = (req, res) => {
    Orderdetail.destroy({
        where: {
            order_id: req.params.order_id
        }
    }).then(row => {
        Order.destroy({
            where: {
                id: req.params.order_id,
                user_id: req.params.user_id
            }
        }).then(r => {
            res.send("" + r + "deleted");
        })
    })
}