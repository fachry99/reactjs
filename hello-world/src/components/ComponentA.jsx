import { useContext } from "react";
import { CountContext } from "../App";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentA
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decerement")}>
        decerement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentA;
