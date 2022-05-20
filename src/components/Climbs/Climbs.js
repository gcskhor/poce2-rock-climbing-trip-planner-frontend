import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../../store.js';
import ClimbForm from './ClimbForm.js';

export default function Climbs({ tripId }) {
	const [climbs, setClimbs] = useState([]);

	const retrieveClimbs = async () => {
		axios.get(`${BACKEND_URL}/routes/${tripId}`).then((response) => {
			const allClimbs = response.data;
			setClimbs(allClimbs);
		});
	};

	useEffect(() => {
		retrieveClimbs();
	}, []);

	function ClimbsList() {
		const list = climbs.map((climb) => {
			return (
				<li>
					{climb.name} (Difficulty: {climb.difficulty})
				</li>
			);
		});
		return <ul>{list}</ul>;
	}

	console.log(climbs);

	return (
		<div>
			{climbs.length > 0 && <ClimbsList />}
			<ClimbForm tripId={tripId} setClimbs={setClimbs} />
		</div>
	);
}
