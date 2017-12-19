const express = require('express');
const path = require('path');
const config = require('./config.json');
const { readFileSync } = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'))
});

app.use('/api/discord', require('./api/discord'));

app.listen(config.port, () => {
	console.info(`Running on port ${config.port}`);
});