// Business Logic
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Register User route
exports.register = async (req, res) => {
	try {
		// Destructuring the data
		const { firstname, lastname, email, password } = req.body;

		if (!(email && password && firstname && lastname)) {
			res.status(400).send('All fields are required');
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			res.status(401).send('User already exists');
		}

		// Encrypt the password & Create user
		const myEncPassword = await bcrypt.hash(password, 10);
		const user = await User.create({
			firstname,
			lastname,
			email: email.toLowerCase(),
			password: myEncPassword,
		});

		// Token
		const data = {
			user: {
				id: user.id,
			},
		};
		const token = jwt.sign(data, process.env.SECRET_KEY, {
			expiresIn: '2h',
		});
		user.token = token;
		// update or not in db

		// handle pwd situation
		user.password = undefined;

		// send token or send just success yes and redirect - choice
		res.status(201).json(user);
	} catch (error) {
		console.log(error.message);
	}
};

// Login user route
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!(email && password)) {
			res.status(400).send('Field is missing');
		}

		const user = await User.findOne({ email });

		// compare password that user just send right now from body to the password which was given at the time of register
		if (user && (await bcrypt.compare(password, user.password))) {
			// creating token
			const data = {
				user: {
					id: user.id,
				},
			};
			const token = jwt.sign(data, process.env.SECRET_KEY, {
				expiresIn: '2h',
			});

			user.token = token;
			user.password = undefined;
			res.status(200).json(user);
		}

		res.status(400).send('email or password is incorrect');
	} catch (error) {
		console.log(error.message);
	}
};

// get user route
exports.getuser = async (req, res) => {
	try {
		userId = req.user.id;
		const user = await User.findById(userId).select('-password');
		res.status(200).json(user);
		// console.log(userId);
	} catch (error) {
		console.log(error.message);
	}
};
