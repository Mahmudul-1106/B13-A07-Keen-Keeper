"use client";
import TimelineData from "@/components/timelineDetails/TimelineData";
import { TimeLineContext } from "@/context/install.context";
import React, { useContext, useMemo, useState } from "react";

const timelinePage = () => {
  const { timeline, setTimeline } = useContext(TimeLineContext);

  // Ai
  // 2. Track only the filter criteria and sort order in local state
  const [filterType, setFilterType] = useState("All");
  const [isDescending, setIsDescending] = useState(true);

  // 3. Use useMemo to calculate the displayed list automatically
  // This avoids "data loss" because 'timeline' remains untouched
  const displayedTimeline = useMemo(() => {
    // Start with a copy of the original data
    let list = [...timeline];

    // Filter by type
    if (filterType !== "All") {
      list = list.filter(
        (item) => item.actionType === filterType.toLocaleLowerCase(),
      );
    }

    // Sort by Date (Assuming you have a 'createdAt' or 'time' field)
    list.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      // return isDescending ? dateB - dateA : dateA - dateB;
      return dateB - dateA;
    });

    return list;
  }, [timeline, filterType, isDescending]);
  // Ai

  // console.log(timeline, "From Timeline Page");
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-3xl font-semibold mt-5">TimeLine</p>

      <div className="flex justify-center mt-3">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter TimeLine: {filterType} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setFilterType("All")}>
              <a>All</a>
            </li>
            <li onClick={() => setFilterType("Text")}>
              <a>Text</a>
            </li>
            <li onClick={() => setFilterType("Call")}>
              <a>Call</a>
            </li>
            <li onClick={() => setFilterType("Video")}>
              <a>Video</a>
            </li>
          </ul>
        </div>
        {/* Sort Toggle Button */}
        {/* <button className="btn" onClick={() => setIsDescending(!isDescending)}>
          {isDescending ? "Newest First" : "Oldest First"}
        </button> */}
      </div>
      <TimelineData timeline={displayedTimeline} />
    </div>
  );
};

export default timelinePage;
