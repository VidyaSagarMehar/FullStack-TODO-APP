const express = require('express');
const {
	home,
	createTODO,
	createTasks,
} = require('../controllers/todoControllers');

const router = express.Router();

router.get('/', home);
router.post('/createTODO', createTODO);
router.put('/createTask', createTasks);

module.exports = router;
