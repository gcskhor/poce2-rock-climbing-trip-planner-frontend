import { useState } from "react";
import "./App.css";
import Trips from "./components/Trips.js";

function App() {
  return (
    <div className="App">
      <p>Rock Climbing Trip Planner!</p>
      <Trips />
    </div>
  );
}

export default App;
