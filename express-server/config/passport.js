const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../model/User');
const config = require('../config/app');

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secretKey;
    passport.use( new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload.data._id, (error, user) => {
            if(error) {
                return done(error, false);
            }
            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}