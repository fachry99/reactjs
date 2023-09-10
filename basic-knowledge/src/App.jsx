/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function App() {
  const planets = [
    { name: "mars", isGasPlanet: false },
    { name: "earth", isGasPlanet: false },
    { name: "jupiter", isGasPlanet: true },
    { name: "venus", isGasPlanet: false },
    { name: "neptune", isGasPlanet: true },
    { name: "uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <h1>{planet.name}</h1>; // will display only gas planets

        // versi  terpendek
        planet.isGasPlanet && <h1>{planet.name}</h1>; // will display only gas planets

        // versi  pendek untuk menampilkan non-gas planets
        //planet.isGasPlanet || <h1>{planet.name}</h1>; // will display only non-gas planets
      })}
    </div>
  );
}

export default App;
