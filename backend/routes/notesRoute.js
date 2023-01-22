const express = require('express');

const {
	home,
	createNote,
	getNote,
	editNote,
	deleteNote,
} = require('../Controllers/noteController');

const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', home);
router.post('/api/v1/note', auth, createNote);
router.post('/api/v1/note', auth, createNote);
router.get('/api/v1/note', auth, getNote);
router.put('/api/v1/note/:id', auth, editNote);
router.delete('/api/v1/note/:id', auth, deleteNote);

module.exports = router;
