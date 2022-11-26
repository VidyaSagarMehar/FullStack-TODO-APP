const TODO = require('../models/todoModels');

exports.home = (req, res) => {
	res.send('Hello From TODO app');
};

// exports.createTODO = async (req, res) => {
// 	try {
// 		const { title, tasks } = req.body;

// 		//checking all the details
// 		if (!title || !tasks) {
// 			throw new Error(`Please Provide enough details`);
// 		}

// 		//Inserting into database
// 		const todo = await TODO.create({ title, tasks });
// 		res.status(201).json({
// 			success: true,
// 			message: 'TODO created Successfully',
// 			todo,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

exports.createTODO = async (req, res) => {
	const { title } = req.body;

	//checking all the details
	if (!title) {
		console.log(`Please Provide a title`);
	}

	//Inserting into database
	const todo = await TODO.create({ title });
	res.status(201).json({
		success: true,
		message: 'TODO title created successfully',
		todo,
	});
};

exports.createTasks = async (req, res) => {
	try {
		const todoID = req.params.id;
		const todotitle = await TODO.findById(todoID);

		if (!todotitle) {
			res.status(400).send('No todo exits');
		}
		const todo = await TODO.create({ tasks });
		res.status(201).json({
			success: true,
			message: 'Task created successfully',
			todo,
		});
	} catch (error) {
		console.log(error);
	}
};
