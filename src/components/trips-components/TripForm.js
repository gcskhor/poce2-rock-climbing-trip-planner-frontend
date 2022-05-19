import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../store";

export default function TripForm({ setTrips }) {
  const [tripName, setTripName] = useState("");
  const handleSubmit = () => {
    // AXIOS CALL TO BACKEND
    axios
      .post(`${BACKEND_URL}/trips/add`, { name: tripName })
      .then((response) => {
        console.log(response.data);
        const newTrip = response.data;
        setTrips((trips) => [...trips, newTrip]);
      })
      .catch((err) => console.log(err));

    console.log(tripName);
    setTripName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your a new trip name"
        value={tripName}
        onChange={(e) => {
          setTripName(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
