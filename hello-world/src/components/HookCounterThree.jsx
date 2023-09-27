import { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return <div>HookCounterThree</div>;
}

export default HookCounterThree;
