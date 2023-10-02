import "./App.css";
import React, { useReducer } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import { CountContext } from "./CountContext";
// import CounterThree from "./components/CounterThree";
// import CounterTwo from "./components/CounterTwo";
// import CounterOne from "./components/CounterOne";

const insialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return insialState;

    default:
      return state;
  }
};

export const UserContext = React.createContext();
function App() {
  const [count, dispatch] = React.useReducer(reducer, insialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        {/* <CounterThree /> */}
        {/* <CounterTwo /> */}
        {/* <CounterOne /> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
