const jwt = require('jsonwebtoken');

const auth = (req, res) => {
	console.log(req.cookie);
	const token =
		req.cookie.token ||
		req.body.token ||
		req.header('Authorization').replace('Bearer', '');
};
