const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
	title: {
		type: String,
		require: [true, 'Title is required'],
		trim: true,
	},
	tasks: [
		{
			type: String,
		},
	],
});

module.exports = mongoose.model('Todo', todoSchema);
