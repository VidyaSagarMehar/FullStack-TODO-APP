require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
	// Hunting for token
	const token =
		req.header('Authorization').replace('Bearer ', '') ||
		req.cookies.token ||
		req.body.token;

	if (!token) {
		return res.status(403).send('token is missing');
	}

	try {
		const decode = jwt.verify(token, process.env.SECRET_KEY);

		// console.log(decode.user.id);

		req.user = decode.user;

		next();
	} catch (error) {
		return res.status(401).send('Invalid token');
	}

	// return next();
};

module.exports = auth;
