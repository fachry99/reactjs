import { useState } from "react";

export const useCounter = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(initialVal);

  return [count, increment, decrement, reset];
};
