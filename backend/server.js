const cors = require('cors');
const bodyParser = require('body-parser');
const CORS_WHITELIST = require('./constants/frontend');

const corsOptions = {
	origin: (origin, cb) => 
		(CORS_WHITELIST.indexOf(origin) !== -1) ? cb(null, true) : cb(new Error('Not allowed by CORS'))
};

const configureServer = app => {
	app.use(cors(corsOptions));

	app.use(bodyParser.json());
};

module.exports = configureServer;