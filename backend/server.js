import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';

/* Custom modules */
import route from './src/route.js';
import connectDB from './src/db_config.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

dotenv.config();

const PORT = process.env.PORT || 5000;

/* Database Connection */
connectDB();

/* Initialize routes */
route(app);

app.listen(PORT, () => {
	console.log(
		`Server started in ${process.env.NODE_ENV} mode on port ${PORT}...`.cyan
			.bold
	);
});
