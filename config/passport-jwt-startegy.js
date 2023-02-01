let passport = require('passport');
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let Doctor = require('../models/Doctor');

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    Doctor.findById(jwt_payload._id, function (err, user) {
        // if error exists
        if (err) {
            return done(err, false);
        }
        // if doctor found then authenticate the user
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));