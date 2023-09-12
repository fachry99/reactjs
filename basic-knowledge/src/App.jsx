// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";

fetch("https://catfact.ninja/fact").then((response) =>
  response.json().then((data) => {
    console.log(data);
  })
);

function App() {
  return (
    <div className="App">
      <button>Generate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default App;
