const fetch = require('node-fetch');
const btoa = require('btoa');
const express = require('express');
const config = require('../config.json');
const router = express.Router();

const CLIENT_ID = config.id;
const CLIENT_SECRET = config.secret;
const REDIR = encodeURIComponent(config.redirect);

router.get('/', (req, res) => {
    if(!(req.query.code)) throw new Error('NoCodeProvided');

    const code = req.query.code;
    const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${REDIR}`,
        {
            method: 'POST',
            headers: {
                Authorization: `Basic ${creds}`,
            },
        });
    const json = response.json();
    res.cookie('token', json.access_token, { maxAge: 2678400000});

    //next();
    res.redirect(`/auth/success`);
});

module.exports = router;