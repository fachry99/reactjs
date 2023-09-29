import { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function doSomething() {
      console.log(someProp);
    }
    doSomething();
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [someProp]); // count is the dependency

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return <div>{count}</div>;
}

export default IntervalHookCounter;
