import { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Hook {count} Counter times
      </button>
    </div>
  );
}

export default HookCounterOne;
