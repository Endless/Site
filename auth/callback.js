const fetch = require('node-fetch');
const btoa = require('btoa');
const express = require('express');
const config = require('../config.json');
const router = express.Router();
const { catchAsync } = require('../utils');

const CLIENT_ID = config.id;
const CLIENT_SECRET = config.secret;
const REDIR = encodeURIComponent(config.redirect);

router.get('/', catchAsync(async (req, res, next) => {
    if(!(req.query.code) /*|| !(typeof req.query.code=== 'undefined')*/) throw new Error('NoCodeProvided');

    const code = req.query.code;
    const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${REDIR}`,
        {
            method: 'POST',
            headers: {
                Authorization: `Basic ${creds}`,
            }
        });
    const json = await response.json();
    const cookies = req.cookies;
    res.cookie('token', json.access_token, { maxAge: 2678400000});

    next();
    res.redirect(`/auth/success`);
}));

module.exports = router;