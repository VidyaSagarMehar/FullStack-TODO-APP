// Business Logic

const Todo = require('../models/todoModel');

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
