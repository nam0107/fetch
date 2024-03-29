const passport = require('passport');
const passportJWT = require("passport-jwt");
const User = require('../../models').User;

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

passport.use(new LocalStrategy({
    usernameField: 'user_name',
    passwordField: 'password'
},
    function (user_name, password, cb) {

        //Assume there is a DB module pproviding a global UserModel
        return User.findOne({
            where: {
                user_name: user_name,
                password: password
            }
        })
            .then(user => {
              
                if (!user) {
                    return cb(null, false, { message: 'Incorrect email or password.' });
                }
                return cb(null, user, {
                   
                    message: 'Logged In Successfully'
                });
            })
            .catch(err => {
              
                return cb(err);
            });
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'ahihi'
},
    function (jwtPayload, cb) {
        console.log(jwtPayload);
        //find the user in db if needed
        return User.findOne({
            where: {
                id: jwtPayload.id
            }
        })
            .then(user => {
                console.log(user);
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));