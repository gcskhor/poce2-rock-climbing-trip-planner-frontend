import React from 'react';
import styles from './TripList.module.css';
import Climbs from './Climbs/Climbs';

export default function TripList({ trips }) {
	return (
		<div>
			{trips.map((trip) => {
				return (
					<div className={styles.trip}>
						<h3 key={trip.id}>{trip.name}</h3>
						<Climbs tripId={trip.id} />
					</div>
				);
			})}
		</div>
	);
}
