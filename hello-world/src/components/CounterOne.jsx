import useCounter from "../Hooks/useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(0, 10); // Destructure the array returned by useCounter()
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
