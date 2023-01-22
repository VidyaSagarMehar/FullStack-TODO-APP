import React from 'react';

const Signup = () => {
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
		const resp = await axios.delete(`/api/v1/todo/${todoId}`);
		console.log(resp);
	};

	return (
		<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
			<form>
				<div className="grid grid-cols-2 gap-4">
					<div className="form-group mb-6">
						<input
							type="text"
							className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput123"
							aria-describedby="emailHelp123"
							placeholder="First name"
						/>
					</div>
					<div className="form-group mb-6">
						<input
							type="text"
							className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput124"
							aria-describedby="emailHelp124"
							placeholder="Last name"
						/>
					</div>
				</div>
				<div className="form-group mb-6">
					<input
						type="email"
						className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						id="exampleInput125"
						placeholder="Email address"
					/>
				</div>
				<div className="form-group mb-6">
					<input
						type="password"
						className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						id="exampleInput126"
						placeholder="Password"
					/>
				</div>
				<div className="form-group form-check text-center mb-6">
					<input
						type="checkbox"
						className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
						id="exampleCheck25"
						checked
					/>
					<label
						className="form-check-label inline-block text-gray-800"
						for="exampleCheck25"
					>
						Subscribe to our newsletter
					</label>
				</div>
				<button
					type="submit"
					className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
				>
					Sign up
				</button>
			</form>
		</div>
	);
};

export default Signup;
