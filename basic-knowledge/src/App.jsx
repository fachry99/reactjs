/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
//import { Task } from "./task.jsx";
import { Text } from "./Text.jsx";

function App() {
  const [showtext, setShowtext] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowtext(!showtext);
        }}
      >
        Show Text
      </button>

      {showtext && <Text />}
    </div>
  );
}

export default App;
