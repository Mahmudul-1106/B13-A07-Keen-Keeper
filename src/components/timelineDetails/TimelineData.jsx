"use client";
import React from "react";
import Image from "next/image";

// tailwind.config.js
content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"];

const TimelineData = ({ timeline }) => {
  console.log("Timeline data", timeline);

  if (timeline.length === 0) {
    return (
      <div className="text-center py-20 mt-20 bg-cyan-100">
        <h2 className="text-2xl font-bold text-gray-800">Timeline is Empty</h2>
      </div>
    );
  }
  return (
    <div className="">
      {timeline.map((data, index) => {
        return (
          <div
            key={index}
            className="py-5 my-4 flex items-center rounded-2xl px-5 w-full  shadow-md space-x-1"
          >
            <figure>
              <Image
                src={
                  data.actionType === "call"
                    ? "/image/call.png"
                    : data.actionType === "text"
                      ? "/image/text.png"
                      : "/image/video.png"
                }
                alt="call"
                width={40}
                height={40}
              ></Image>
            </figure>
            <div className="">
              <p>
                <span className="font-bold">
                  {data.actionType === "call"
                    ? "Call"
                    : data.actionType === "text"
                      ? "Text"
                      : "Video"}
                </span>
                {"  "}
                with {data.findFriend.name}
              </p>
              <p>{data.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineData;
