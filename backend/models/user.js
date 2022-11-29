const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
});

module.exports = mongoose.model('User', userSchema);
