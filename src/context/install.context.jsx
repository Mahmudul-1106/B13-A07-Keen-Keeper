"use client";
import { createContext, useState } from "react";

export const TimeLineContext = createContext();

const TimeLineContextProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const data = {
    timeline,
    setTimeline,
  };

  return (
    <TimeLineContext.Provider value={data}>{children}</TimeLineContext.Provider>
  );
};

export default TimeLineContextProvider;
