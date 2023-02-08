import React, { useState, useEffect } from 'react';

function Profile() {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');

	useEffect(() => {
		// Getting user profile
		// const host = 'https://keepnotes-app-mern-production.up.railway.app';

		const myRequest = new Request(
			`https://keepnotes-app-mern-production.up.railway.app/getuser`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('token').toString(),
				},
			},
		);

		fetch(myRequest)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUserName(data.user.firstname + ' ' + data.user.lastname);
				setUserEmail(data.user.email);
				// console.log(data.user.email);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<h4>{userName}</h4>
			<div>{userEmail}</div>
		</>
	);
}

export default Profile;
