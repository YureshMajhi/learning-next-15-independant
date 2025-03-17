"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useState } from "react";

const Counter = () => {
  const { isLoaded, userId } = useAuth();
  const [count, setCount] = useState(0);

  if (!isLoaded || !userId) return null;

  console.log("counter component");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default Counter;
