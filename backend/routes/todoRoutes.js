const express = require('express');

const {
	home,
	createTodo,
	getTodo,
	editTodo,
	deleteTodo,
} = require('../Controllers/todoController');

const router = express.Router();

router.get('/', home);
router.post('/api/v1/todo', createTodo);
router.get('/api/v1/todo', getTodo);
router.put('/api/v1/todo/:id', editTodo);
router.delete('/api/v1/todo/:id', deleteTodo);

module.exports = router;
