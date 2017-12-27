const express = require('express');
const config = require('../config.json');
const router = express.Router();

const CLIENT_ID = config.id;
const REDIR = encodeURIComponent(config.redirect);

router.get('/', (req, res) => {
    res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${REDIR}`);
});

module.exports = router;