import axios from 'axios';
import React, { useState } from 'react';
import { BACKEND_URL } from '../../store.js';
import styles from './Climbs.module.css';

export default function ClimbForm({ tripId, setClimbs }) {
	const blankClimb = { name: '', difficulty: 0 };
	const [climbDetails, setClimbDetails] = useState(blankClimb);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setClimbDetails({ ...climbDetails, [id]: value });
	};

	const handleSubmit = () => {
		const newClimbInfo = {
			name: climbDetails.name,
			difficulty: climbDetails.difficulty,
			tripId,
		};

		axios.post(`${BACKEND_URL}/route/add`, newClimbInfo).then((response) => {
			const newClimb = response.data;
			setClimbs((previousClimbs) => [...previousClimbs, newClimb]);
		});

		setClimbDetails(blankClimb);
	};

	return (
		<div className={styles.climbform}>
			<p>Submit a new climb:</p>
			<label htmlFor="name">Name of climb: </label>
			<input
				type="text"
				placeholder="Enter a new climb location"
				id="name"
				value={climbDetails.name}
				onChange={handleChange}
			/>
			<br />
			<label htmlFor="difficulty">Difficulty: </label>
			<input
				type="number"
				id="difficulty"
				value={climbDetails.difficulty}
				min="0"
				onChange={handleChange}
			/>
			<br />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}
