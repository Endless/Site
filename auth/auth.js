const config = require('../config.json');
const passport = require('passport');
const discordStrategy = require('passport-discord').Strategy;

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((id, done) => done(null, id));

passport.use(new discordStrategy({
    clientID: config.id,
    clientSecret: config.secret,
    scope: config.scopes,
    callbackURL: config.redirect,
}, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
}));

module.exports = passport;