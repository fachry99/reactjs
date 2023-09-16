/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCounter } from "./useCounter";

function App() {
  const [count, increment, decrement, reset] = useCounter(40);

  return (
    <div className="App">
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
