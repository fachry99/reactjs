import { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // to change title of the page same as count
  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `Clicked ${count} times`;
  });
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName({ name: e.target.value });
        }}
      />
      <button onClick={() => setCount(count + 1)}>
        Hook {count} Counter times
      </button>
    </div>
  );
}

export default HookCounterOne;
