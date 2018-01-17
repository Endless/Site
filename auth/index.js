const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const authSystem = require('./auth');

router
    .use('/login', async (req, res, next) => {
        if(req.query.redirectURI) res.cookie('redirectURI', req.query.redirectURI, { maxAge: 2678400000, signed: true, path: '/' });

        if(!(req.signedCookies.accessToken)) return next();

        const profile = await fetch('https://discordapp.com/api/users/@me', { method: 'GET', headers: { Authorization: `Bearer ${req.signedCookies.accessToken}`}});
        const guilds = await fetch('https://discordapp.com/api/users/@me/guilds', { method: 'GET', headers: { Authorization: `Bearer ${req.signedCookies.accessToken}`}});
        const user = JSON.parse(profile.body);
        user.guilds = JSON.parse(guilds.body);

        req.login(user, e => (e?res.render('error', { code: '500', identity: 'NO'}):undefined));
        req.session.save(e => (e?res.render('error', { code: '500', identity: 'NO'}):undefined));

        res.redirect(req.query.redirectURI?req.query.redirectURI:'/');
    }, authSystem.authenticate('discord'))
    .use('/callback', authSystem.authenticate('discord'), (req, res) => {
        const redirect = req.signedCookies.redirectURI;
        res.cookie('accessToken', req.session.passport.user.accessToken, { maxAge: 2678400000, signed: true, path: '/' });
        res.clearCookie('redirectURI');
        res.redirect(redirect || '/');
    })
    .use('/logout', (req, res) => {
        res.clearCookie('accessToken');
        req.logout();
        res.redirect('/');
    });

module.exports = router;