const express = require('express');
const https = require('https');
const path = require('path');
const config = require('./config.json');
const { readFileSync } = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'))
});

app.use('/api/discord', require('./api/discord'));

https.createServer({
	key: readFileSync('/home/artu/ssl/artuto.me.key'),
	cert: readFileSync('/home/artu/ssl/artuto.me.pem'),
}, app).listen(config.port, () => {
	console.info(`Running on port ${config.port}`);
});