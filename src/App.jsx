
import './App.css'
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}   style={{ marginRight: "10px" }}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
