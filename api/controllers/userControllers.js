const sequelize = require('sequelize');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../../models').User;
const Role = require('../../models').Role;


// check pass
function comparePassword(password, has_password) {
    return bcrypt.compareSync(password, has_password);
};

//login
exports.login = function (req, res, next) {
    passport.authenticate('local', { session: false }, (err, user, info) => {
 
        // console.log(err);
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            });
        }

        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            
            const token = jwt.sign({
                mail: user.email,
                user_name: user.user_name,
                id: user.id
            }, 'ahihi');

            return res.json({ user, token });
        });
    })
        (req, res);
    // User.findOne({ where: { user_name: req.body.user_name } }).then(user => {
    //     if (!user) {
    //         console.log("khong co user nay");
    //     } else {
    //         if (comparePassword(req.body.password, user.password)) {
    //             const sign = {
    //                 token: jwt.sign({
    //                     user_name: user.user_name,
    //                     _id: user.user_id,
    //                     active: 0
    //                 }, 'secretkey') // secretKey
    //             };
    //             res.json(sign);
    //         } else {
    //             console.log("mat khau khong chinh xac");
    //         }
    //     }
    // });
};

// register
exports.register = function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    User.findOne({ where: { user_name: req.body.user_name } }).then(user => {
        if (user) {
            console.log('ten tai khoan da ton tai');
        } else {
            let hash_password = bcrypt.hashSync(req.body.password, 10);
            Role.findOne({
                where: {
                    name: 'user'
                }
            }).then(role => {
                role.createUser({
                    user_name: req.body.user_name,
                    email: req.body.email, // email unique
                    password: hash_password,
                    status: 1
                }).then(user => {
                    res.send("Done!");
                })
            })
        }
    })
};

// get all user
exports.getAllUser = function (req, res) {
    User.findAll({
        attributes: ['id', 'role_id', 'user_name', 'email'],
        raw: true
    })
        .then(arrUser => {
            res.json(arrUser);
        })
};

// del user
exports.delUser = function (req, res) {
    User.destroy({
        where: {
            id: req.params.user_id
        }
    }).then(row => {
        res.send(row)
    });
};

// get user
exports.getUser = function (req, res) {
    User.findOne({
        where: { id: req.params.user_id },
        attributes: ['id', 'role_id', 'user_name', 'email'],
        raw: true
    }).then(user => {
        res.json(user);
    })
};

// update user
exports.updateUser = function (req, res) {
    User.update({
        // truong can update
        user_name: req.body.user_name,
        password: req.body.password,
        email: req.body.email
    },
        {
            // dieu kien
            where: {
                id: req.params.user_id
            }
        }).then(row => {
            console.log(row);
            res.send("done!");
        })
};