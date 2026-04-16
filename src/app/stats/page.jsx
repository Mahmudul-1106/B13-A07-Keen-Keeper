"use client"; // Required for Next.js App Router

import { TimeLineContext } from "@/context/install.context";
import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const RoundedPieChart = () => {
  const { timeline, setTimeline } = useContext(TimeLineContext);
  //   console.log(timeline, "Stats page");

  const call = timeline.filter((data) => data.actionType === "call");
  const text = timeline.filter((data) => data.actionType === "text");
  const video = timeline.filter((data) => data.actionType === "video");
  //   console.log(call.length, "call Data");

  const data = [
    { name: "Call", value: call.length },
    { name: "Text", value: text.length },
    { name: "Video", value: video.length },
    // { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  if (call.length === 0 && text.length === 0 && video.length === 0) {
    return (
      <div className="px-5 mx-auto">
        <h3 className="text-3xl font-bold mt-5">Friendship Analytics</h3>
        <div className="py-10 my-4  text-center rounded-2xl px-5 w-full  shadow-md">
          <p className="text-xl font-bold text-cyan-500">
            No Interactions Logged Yet
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" mx-auto">
      <h3 className="text-3xl font-bold my-5 px-5">Friendship Analytics</h3>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={120} // Makes it a Donut (optional)
              outerRadius={150}
              paddingAngle={10} // This creates the "Gap"
              cornerRadius={10} // This creates the "Rounded Corners"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RoundedPieChart;
