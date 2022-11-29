// Business Logic
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Todo = require('../models/todoModel');
const User = require('../models/user');

// Home Route
exports.home = (req, res) => {
	res.send('Hello from TODO app');
};
// POST route - Create todo
exports.createTodo = async (req, res) => {
	try {
		const { title, tasks } = req.body;
		if (!title) {
			throw new Error('Title is required');
		}

		// Inserting into Database
		const todo = await Todo.create({
			title: req.body.title,
			tasks: req.body.tasks,
		});
		res.status(201).json({
			success: true,
			message: 'Todo Created Successfully',
			todo,
		});
	} catch (error) {
		console.log(error.message);
	}
};

// GET route - get todo
exports.getTodo = async (req, res) => {
	try {
		const todos = await Todo.find();
		res.status(201).json({
			success: true,
			todos,
		});
	} catch (error) {
		console.log(error.message);
		res.status(401).json({
			success: false,
			message: error.message,
		});
	}
};

//PUT route - edit todo
exports.editTodo = async (req, res) => {
	try {
		const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({
			success: true,
			message: 'Todo updated successfully',
		});
	} catch (error) {
		console.log(error.message);
		res.status(401).json({
			success: false,
			message: error.message,
		});
	}
};

// DELETE route - delete todo
exports.deleteTodo = async (req, res) => {
	try {
		const todoId = req.params.id;
		const todo = await Todo.findByIdAndDelete(todoId);
		res.status(201).json({
			success: true,
			message: 'Todo deleted successfully',
		});
	} catch (error) {
		console.log(error.message);
		res.status(401).json({
			success: false,
			message: error.message,
		});
	}
};

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

		// Encrypt the password
		const myEncPassword = await bcrypt.hash(password, 10);
		const user = await User.create({
			firstname,
			lastname,
			email: email.toLowerCase(),
			password: myEncPassword,
		});

		// Token
		const token = jwt.sign(
			{
				user_id: user._id,
				email,
			},
			process.env.SECRET_KEY,
			{
				expiresIn: '2h',
			},
		);
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
			const token = jwt.sign(
				{ user_id: user._id, email },
				process.env.SECRET_KEY,
				{
					expiresIn: '2h',
				},
			);

			user.token = token;
			user.password = undefined;
			res.status(200).json(user);
		}

		res.status(400).send('email or password is incorrect');
	} catch (error) {
		console.log(error.message);
	}
};
