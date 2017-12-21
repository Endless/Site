const express = require('express');
const fetch = require('node-fetch');
const btoa = require('btoa');
const config = require('../config.json');
const router = express.Router();
const { catchAsync } = require('../utils');

const CLIENT_ID = 310578566695878658;
const CLIENT_SECRET = config.secret;
const REDIR = encodeURIComponent(config.redirect);

router.get('/login', (req, res) => {
    res.redirect(`https://discordapp.com/oauth2/authorize?client_id=310578566695878658&scope=identify&response_type=code&redirect_uri=${REDIR}`);
});

router.get('/callback', catchAsync(async (req, res) => {
    if(!req.query.code) throw new Error('NoCodeProvided');

    const code = req.query.code;
    const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${REDIR}`,
        {
            method: 'POST',
            headers: {
                    Authorization: `Basic ${creds}`,
                },
        });
    const json = await response.json();
    res.cookie('token', `${json.access_token}`).redirect('https://endless.artuto.me/api/discord/success');
}));

router.get('/success', catchAsync(async (req, res) => {

    console.info(`Request: Cookies: ${req.cookies}`);
    if(!req.cookies) throw new Error('NoCookies');

    /*const token = req.cookies.token;
    const response = await fetch('https://discordapp.com/api/users/@me',
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
    const json = response.json();

    res.send(`Welcome, ${json.username}#${json.discriminator} (ID: ${json.id})`)*/
}));

module.exports = router;