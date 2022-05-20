import axios from "axios";
import React, { useEffect, useState } from "react";
import TripForm from "./TripForm.js";
import TripList from "./TripList.js";
import { BACKEND_URL } from "../store.js";

export default function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // LOAD ALL TRIPS ON COMPONENT MOUNT
    axios
      .get(`${BACKEND_URL}/trips`)
      .then((response) => {
        console.log(response.data.trips);
        setTrips(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TripForm setTrips={setTrips} />
      <TripList trips={trips} />
    </div>
  );
}
