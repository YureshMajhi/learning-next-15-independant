"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => router.push("/")} className="bg-green-400">
        Go Home
      </button>
    </div>
  );
};

export default page;
