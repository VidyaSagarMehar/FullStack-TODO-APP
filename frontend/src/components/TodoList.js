import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

export const TodoList = () => {
	const [todoData, setTodoData] = useState(null);

	const fetchTodoData = async () => {
		const resp = await axios.get('/api/v1/todo');
		console.log(resp);

		// If there is no todos in DB, dont set the values
		if (resp.data.todos.length > 0) {
			setTodoData(resp.data.todos);
		}
	};

	useEffect(() => {
		fetchTodoData();
	}, [todoData]);

	const handleEdit = async (todo) => {
		const todoTitle = prompt('Enter the title');
		const todoTasks = prompt('Enter the tasks');

		if (!todoTitle || !todoTasks) {
			alert('Please Enter Title and task both');
		} else {
			const resp = await axios.put(`/api/v1/todo/${todo._id}`, {
				title: todoTitle,
				tasks: todoTasks,
			});
			console.log(resp);
		}
	};

	const handleDelete = async (todoId) => {
		const resp = await axios.delete(`/api/v1/todo/${todoId._id}`);
		console.log(resp);
	};

	return (
		<div className="mx-auto error">
			<section className="text-gray-300 body-font">
				<div className="container py-12 mx-auto">
					<div className="flex flex-col text-center w-full mb-8">
						<h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-300">
							All TODOs
						</h1>
					</div>
					<div className="lg:w-2/3 w-full mx-auto overflow-auto">
						<table className="table-auto w-full text-left whitespace-no-wrap">
							<thead>
								<tr>
									<th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
										Todo Title
									</th>
									<th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
										Todo Tasks
									</th>
									<th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
										Edit
									</th>
									<th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
										Delete
									</th>
								</tr>
							</thead>
							<tbody>
								{todoData &&
									todoData.map((todo) => (
										<tr>
											<td className="px-4 py-3">{todo.title}</td>
											<td className="px-4 py-3">{todo.tasks}</td>
											<td className="px-4 py-3">
												<button
													className="hover:text-green-500"
													onClick={() => handleEdit(todo)}
												>
													Edit
												</button>
											</td>
											<td className="px-4 py-3 text-lg text-gray-300">
												<button
													className="hover:text-red-500"
													onClick={() => handleDelete(todo._id)}
												>
													Delete
												</button>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};
