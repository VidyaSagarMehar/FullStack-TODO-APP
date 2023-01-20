const express = require('express');

const {
	home,
	createTodo,
	getTodo,
	editTodo,
	deleteTodo,
	register,
	login,
} = require('../Controllers/todoController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', home);
// router.post('/api/v1/todo', auth, createTodo);
router.post('/api/v1/todo', createTodo);
router.get('/api/v1/todo', getTodo);
router.put('/api/v1/todo/:id', editTodo);
router.delete('/api/v1/todo/:id', deleteTodo);

module.exports = router;
