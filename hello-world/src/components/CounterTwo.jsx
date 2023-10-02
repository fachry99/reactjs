import useCounter from "../Hooks/useCounter";
function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(20, 20); // Use array destructuring instead of object destructuring
  return (
    <div>
      <h2>Count Two = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
