const express = require('express');

const {
	home,
	createTodo,
	getTodo,
	editTodo,
	deleteTodo,
} = require('../Controllers/todoController');

const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', home);
router.post('/api/v1/todo', auth, createTodo);
router.post('/api/v1/todo', auth, createTodo);
router.get('/api/v1/todo', auth, getTodo);
router.put('/api/v1/todo/:id', auth, editTodo);
router.delete('/api/v1/todo/:id', auth, deleteTodo);

module.exports = router;
