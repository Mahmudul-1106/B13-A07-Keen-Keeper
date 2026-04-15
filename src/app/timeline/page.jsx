"use client";
import TimelineData from "@/components/timelineDetails/TimelineData";
import { TimeLineContext } from "@/context/install.context";
import React, { useContext } from "react";

const timelinePage = () => {
  const { timeline, setTimeline } = useContext(TimeLineContext);
  // console.log(timeline, "From Timeline Page");
  return (
    <div>
      <p className="text-red-400 bg-amber-300">TimeLine Page</p>
      <TimelineData timeline={timeline}></TimelineData>
    </div>
  );
};

export default timelinePage;
