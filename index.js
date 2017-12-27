const express = require('express'), cookieParser = require('cookie-parser');
const https = require('https');
const path = require('path');
const config = require('./config.json');
const { readFileSync } = require('fs');
const app = express();

if(config.portHttp==="" || config.portHttps==="")
    throw new Error('Ports not defined!');

app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.use('/auth/login', require('./auth/login'));
app.use('/auth/callback', require('./auth/callback'));
app.use('/auth/success', require('./auth/success'));
app.use('/auth/logout', require('./auth/logout'));

app.use((err, req, res, next) => {
    if(config.debug) console.log(err);
    switch(err.message)
    {
        case 'NoCodeProvided':
            return res.status(400).send({
                status: 'ERROR',
                error: err.message,
            });
        case 'NoCookies':
            return res.status(422).send({
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

app.listen(config.portHttp, () => {
	console.info(`[Express HTTP] Running on port ${config.portHttp}`);
});

/*https.createServer({
    "key": readFileSync(''),
    "cert": readFileSync(''),
}, app).listen(config.portHttps, () => {
    console.log(`[Express HTTPS] Running on port ${config.portHttps}`)
});*/

console.log(`[Endless Dashboard] App ID: ${config.id}`);
console.log(`[Endless Dashboard] Owner: ${config.owner}`);
console.log(`[Endless Dashboard] Secret: ${config.secret}`);

module.exports.express = app;