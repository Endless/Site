const express = require('express'), cookieParser = require('cookie-parser');
const https = require('https');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config.json');
const authentication = require('./auth/auth');
const { readFileSync } = require('fs');
const app = express();

if(config.portHttp==="" || config.portHttps==="")
    throw new Error('Ports not defined!');

// Routes

const auth = require('./auth');

// Set-up app

app
    .enable('trust proxy')
    .use(bodyParser.urlencoded({
        extended: false,
    }))
    .use(session({
        secret: config.secret,
        resave: true,
        saveUninitialized: true,
        proxy: true,
    }))
    .use(cookieParser(config.secret))
    .use(authentication.initialize())
    .use(authentication.session());

app
    .set('view engine', 'ejs')
    .set('views', `${__dirname}/public`);

app
    .get('/', (req, res) => {
        res.status(200).render('index', {
            identity: (req.isAuthenticated()?`${req.user.username}#${req.user.discriminator}`:'NO'),
        });
    })
    .use('/auth', auth);

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
    }});


// Actually startup

app.listen(config.portHttp, () => {
	console.info(`[Express HTTP] Running on port ${config.portHttp}`);
});

/*https.createServer({
    "key": readFileSync(''),
    "cert": readFileSync(''),
}, app).listen(config.portHttps, () => {
    console.log(`[Express HTTPS] Running on port ${config.portHttps}`)
});*/

// Log info when done

console.log(`[Endless Dashboard] App ID: ${config.id}`);
console.log(`[Endless Dashboard] Owner: ${config.owner}`);
console.log(`[Endless Dashboard] Secret: ${config.secret}`);

module.exports.express = app;