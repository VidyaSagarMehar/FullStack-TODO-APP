const mongoose = require('mongoose');

const DbConnection = () => {
	mongoose
		.connect(process.env.MONGO_URL)
		.then((conn) => {
			console.log(`Connected to the DATABASE : ${conn.connection.host}`);
		})
		.catch((error) => {
			console.log(error.message);
			process.exit(1);
		});
};

module.exports = DbConnection;
