/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  const nama = <h1>ME 👩‍💻</h1>;
  return (
    <>
      <h1>Hello, world! from {nama}</h1>
      <Job salary="Fachry" position={20} company="151fachry@gmail.com" />
      <Job salary="kelfin" position={21} company="kelfin@gmail.com" />
      <Job salary="kelfin" position={21} company="kelfin@gmail.com" />
    </>
  );
}

const Job = (props) => {
  return (
    <>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
    </>
  );
};

export default App;
