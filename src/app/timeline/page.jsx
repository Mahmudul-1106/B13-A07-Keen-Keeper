"use client";
import TimelineData from "@/components/TimelineData";
import { TimeLineContext } from "@/context/install.context";
import React, { useContext } from "react";

const timelinePage = () => {
  const { timeline, setTimeline } = useContext(TimeLineContext);
  // console.log(timeline, "From Timeline Page");
  return (
    <div>
      <p>TimeLine Page</p>
      <TimelineData timeline={timeline}></TimelineData>
    </div>
  );
};

export default timelinePage;
