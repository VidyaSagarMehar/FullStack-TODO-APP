const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	firstname: {
		type: String,
		default: null,
	},
	lastname: {
		type: String,
		default: null,
	},
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
	token: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('User', userSchema);
