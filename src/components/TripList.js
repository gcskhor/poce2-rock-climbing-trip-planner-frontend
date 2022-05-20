import React from "react";
import styles from "./TripList.module.css";

export default function TripList({ trips }) {
  return (
    <div>
      {trips.map((trip) => {
        return (
          <div className={styles.trip}>
            <h3 key={trip.id}>{trip.name}</h3>
            {/* CLIMB COMPONENT GOES HERE */}
          </div>
        );
      })}
    </div>
  );
}
