// Business Logic
const Note = require('../models/noteModel');

// Home Route
exports.home = (req, res) => {
	res.send('Hello from KeepNotes app');
};
// POST route - Create note
exports.createNote = async (req, res) => {
	// const user = await User.findById(userId).select('-password');
	// res.status(200).json(user);

	try {
		userId = req.user.id;
		const { title, tasks } = req.body;
		if (!title) {
			throw new Error('Title is required');
		}

		// Inserting into Database
		const note = await Note.create({
			title,
			tasks,
			user: userId,
		});
		// console.log(userId);
		res.status(201).json({
			success: true,
			message: 'Note Created Successfully',
			note,
		});
	} catch (error) {
		console.log(error.message);
	}
};

// GET route - get note
exports.getNote = async (req, res) => {
	try {
		const notes = await Note.find({ user: req.user.id });
		res.status(201).json({
			success: true,
			notes,
		});
	} catch (error) {
		console.log(error.message);
		res.status(401).json({
			success: false,
			message: error.message,
		});
	}
};

// PUT route - edit note
exports.editNote = async (req, res) => {
	try {
		const note = await Note.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({
			success: true,
			message: 'Note updated successfully',
		});
	} catch (error) {
		console.log(error.message);
		res.status(401).json({
			success: false,
			message: error.message,
		});
	}
};

// DELETE route - delete note
exports.deleteNote = async (req, res) => {
	try {
		const noteId = req.params.id;
		const note = await Note.findByIdAndDelete(noteId);
		res.status(201).json({
			success: true,
			message: 'Note deleted successfully',
		});
	} catch (error) {
		console.log(error.message);
		res.status(401).json({
			success: false,
			message: error.message,
		});
	}
};
