import { useState } from "react";

function App() {
  const nama = <h1>ME 👩‍💻</h1>;
  return (
    <>
      <h1>Hello, world! from {nama}</h1>
      <User name="Fachry" age={20} email="151fachry@gmail.com" />
      <User name="kelfin" age={21} email="kelfin@gmail.com" />
    </>
  );
}

const User = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>151fachry@gmail.com</h2>
    </>
  );
};

export default App;
