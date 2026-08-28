import { useState } from "react";

function State() {
  let [count, setCount] = useState(0);

  const handleCount = () => setCount(count + 1);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>+</button>
    </>
  );
}

export default State;
