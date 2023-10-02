import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decerement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decerement")}>decerement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <div>
        <div>countTwo - {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decerement")}>decerement</button>
        <button onClick={() => dispatchTwo("reset")}>reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
