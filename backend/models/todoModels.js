const mongoose = require('mongoose');

const TODOschema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
	tasks: {
		type: Array,
		// require: true,
		items: [],
	},
});

module.exports = mongoose.model('TODO', TODOschema);
