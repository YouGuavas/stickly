const express = require('express');

const SERVER_CONFIGS = require('./constants/server');

const configureServer = require('./server');
const configureRoutes = require('./routes');

const app = express();

configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIGS.PORT, err => {
	if(err) throw err;
	console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});