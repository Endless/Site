const express = require('express');
const https = require('https');
const path = require('path');
const config = require('./config.json');
const { readFileSync } = require('fs');
const app = express();

if(config.portHttp==="" || config.portHttps==="")
    throw new Error('Ports not defined!');

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'))
});

app.use('/api/discord', require('./api/discord'));

app.listen(config.portHttps, () => {
	console.info(`[Express HTTP] Running on port ${config.portHttp}`);
});

/*https.createServer({
    "key": readFileSync(''),
    "cert": readFileSync(''),
}, app).listen(config.portHttps, () => {
    console.log(`[Express HTTP] Running on port ${config.portHttps}`)
});*/