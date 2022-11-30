import React from 'react';
import '../App.css';
export const TodoList = () => {
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
								<tr>
									<td className="px-4 py-3">Title</td>
									<td className="px-4 py-3">Tasks</td>
									<td className="px-4 py-3">
										<button className="hover:text-green-500">Edit</button>
									</td>
									<td className="px-4 py-3 text-lg text-gray-300">
										<button className="hover:text-red-500">Delete</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};
