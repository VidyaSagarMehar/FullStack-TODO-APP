const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
	title: {
		type: String,
		require: [true, 'Title is required'],
		trim: true,
	},
	tasks: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});
module.exports = mongoose.model('Todo', todoSchema);
