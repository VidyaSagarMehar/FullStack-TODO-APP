import React, { useContext } from 'react';
import noteContext from '../Context/noteContext';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BsTrash2, BsPencilSquare } from 'react-icons/bs';

const Noteitem = (props) => {
	const notify = () => {
		toast.error('note deleted!', {
			position: 'bottom-right',
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
	};
	const context = useContext(noteContext);
	const { deleteNote } = context;
	const { note, updateNote } = props;

	// getting creation date
	const date = new Date(note.date);
	const formattedDate = date.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	//getting creation time
	const formattedTime =
		date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

	return (
		<div className="noteItem col-md-3 my-1">
			<ToastContainer
				position="bottom-right"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<div className="card">
				<div className="card-body">
					<div className="">
						<div className="d-flex inline align-items-center justify-content-between">
							<BsPencilSquare
								role="button"
								onClick={() => {
									updateNote(note);
								}}
							/>
							<BsTrash2
								role="button"
								onClick={() => {
									deleteNote(note._id);
									notify();
								}}
							/>
						</div>
					</div>
					<div>
						<p className="card-title">{note.title}</p>
						<p className="card-text">{note.tasks}</p>
					</div>
					<span className="fs-6 fw-lighter d-flex mt-3 justify-content-between">
						<p className="">{formattedDate}</p>
						<p className="">{formattedTime}</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Noteitem;
