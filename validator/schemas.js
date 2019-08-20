const Joi = require('@hapi/joi');
const user_name = Joi.string().required();
const email = Joi.string().email({ minDomainSegments: 2 }).required();
const password = Joi.string().min(6).required();

const userDataSchema = Joi.object({
    user_name: user_name,
    email: email,
    password: password,
    repassword: Joi.string().valid(Joi.ref('password')).required().strict()
});

module.exports = {
    '/users/register': userDataSchema
};