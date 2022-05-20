import axios from 'axios';
import React, { useState } from 'react';
import { BACKEND_URL } from "../../store.js";

export default function ClimbForm({ tripId }) {
  const newClimb = { name: '', difficulty: 0 }
  const [climbDetails, setClimbDetails] = useState(newClimb);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setClimbDetails({...climbDetails, [id]: value})
  }

  const handleSubmit = async () => {
    const newClimbInfo = {
      name: climbDetails.name,
      difficulty: climbDetails.difficulty,
      tripId
    }

    const newClimb = await axios.post(`${BACKEND_URL}/route/add`, newClimbInfo)
    console.log(newClimb)
  };

  return (
    <div>
      <label for="name">Name of climb: </label>
      <input
        type="text"
        placeholder="Enter a new climb location"
        id="name"
        value={climbDetails.name}
        onChange={handleChange}
      /><br/>
      <label for="difficulty">Difficulty: </label>
      <input
        type="number"
        id="difficulty"
        value={climbDetails.difficulty}
        min="0"
        onChange={handleChange}
      /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
