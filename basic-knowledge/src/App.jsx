/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function App() {
  const age = 20;
  const isGreen = true;
  return (
    <div>
      {age > 18 ? <h2>Anda sudah dewasa</h2> : <h2>Anda masih anak-anak</h2>}
      <h2 style={{ color: isGreen ? "green" : "red" }}>Flag</h2>
      {isGreen && <button>Click me</button>}{" "}
      {/* if isGreen is true, then render the button */}
    </div>
  );
}

export default App;
