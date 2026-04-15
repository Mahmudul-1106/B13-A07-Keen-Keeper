"use client";
import React from "react";
import Image from "next/image";

// tailwind.config.js
content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"];

const TimelineData = ({ timeline }) => {
  console.log("Timeline data", timeline.length);

  if (timeline.length === 0) {
    return (
      <div className="text-center py-20 mt-20 bg-amber-400">
        <h2 className="text-2xl font-bold text-red-600">Timeline is empty</h2>
      </div>
    );
  }
  return (
    <div className="py-5 flex justify-center items-center rounded-2xl px-5 w-full bg-red-300  shadow-sm">
      <figure>
        <Image src="/image/call.png" alt="call" width={50} height={0}></Image>
      </figure>
      <div className="bg-amber-400">
        <p>Mamun</p>
      </div>
    </div>
  );
};

export default TimelineData;
