"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("counter component");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default Counter;
