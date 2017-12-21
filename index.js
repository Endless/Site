const express = require('express');
const https = require('https');
const cookies = require('cookie-parser');
const path = require('path');
const config = require('./config.json');
const { readFileSync } = require('fs');
const app = express();

if(config.portHttp==="" || config.portHttps==="")
    throw new Error('Ports not defined!');

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
    console.info(`Request: Cookies: ${req.cookies}`)
});

app.use('/api/discord', require('./api/discord'));

app.use((err, req, res, next) => {
    switch(err.message)
    {
        case 'NoCodeProvided':
            return res.status(400).send({
                status: 'ERROR',
                error: err.message,
            });
        default:
            return res.status(500).send({
                status: 'ERROR',
                error: err.message,
            });
    }
});

app.use(cookies());

app.listen(config.portHttp, () => {
	console.info(`[Express HTTP] Running on port ${config.portHttp}`);
});

/*https.createServer({
    "key": readFileSync(''),
    "cert": readFileSync(''),
}, app).listen(config.portHttps, () => {
    console.log(`[Express HTTPS] Running on port ${config.portHttps}`)
});*/

module.exports.express = app;