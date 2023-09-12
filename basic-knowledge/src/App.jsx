// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((response) => {
        setGeneratedExcuse(response.data[0].excuse);
      });
  };

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>

      <h1>{generatedExcuse}</h1>
    </div>
  );
}

export default App;
