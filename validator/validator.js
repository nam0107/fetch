const { check, validationResult } = require('express-validator');
exports.validatorUser = [
    check('user_name', 'khong duoc de trong').not().isEmpty(),
    check('email', 'email phai dung dinh dang').isEmail(),
    check('password', 'password phai co do dai >=6').isLength({ min: 6 }).not().isEmpty(),
    check('re-password').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }
        // Indicates the success of this synchronous custom validator
        return true;
    })
]