"use client";
import { TimeLineContext } from "@/context/install.context";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { use, useContext, useEffect, useState } from "react";

const friendDetailsPage = () => {
  const { timeline, setTimeline } = useContext(TimeLineContext);
  // console.log(timeline);

  const { friendId } = useParams();
  // console.log(friendId);

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false); // Data is here!
      })
      .catch((err) => {
        console.error("Error fetching friends:", err);
        setLoading(false);
      });
  }, []);

  const friendsList = [...friends];
  const findFriend = friendsList.find((friend) => friend.id == friendId);

  // 2. Prevent rendering if data isn't ready yet
  if (loading) {
    // return <div className="p-10">Loading friend data...</div>;
    // return <span className="loading loading-bars loading-xl"></span>;
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        {/* DaisyUI Spinner */}
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-lg font-semibold animate-pulse">
          Loading Friend Details...
        </p>
      </div>
    );
  }

  // 3. Handle the case where the ID in the URL doesn't match any friend
  if (!findFriend) {
    return <div className="p-10">Friend with ID {friendId} not found.</div>;
  }

  const { name, picture } = findFriend;
  return (
    <div className="flex justify-between">
      <p>Timeline:{timeline.length}</p>
      {/* Left Side */}
      <div className="w-1/3">
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-10 pt-5">
            <Image
              className="rounded-full"
              src={picture}
              alt="Friend"
              width={100}
              height={100}
            ></Image>
          </figure>
          <div className="flex flex-col space-y-2 items-center text-center">
            <h2 className="card-title pt-2">{name}</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="">
        <button
          className="btn"
          onClick={() => {
            setTimeline([
              ...timeline,
              {
                findFriend,
                actionType: "call",
                time: new Date().toDateString(),
              },
            ]);
          }}
        >
          Call
        </button>
        <button
          onClick={() => {
            setTimeline([
              ...timeline,
              {
                findFriend,
                actionType: "text",
                time: new Date().toDateString(),
              },
            ]);
          }}
          className="btn"
        >
          Text
        </button>
        <button
          onClick={() => {
            setTimeline([
              ...timeline,
              {
                findFriend,
                actionType: "video",
                time: new Date().toDateString(),
              },
            ]);
          }}
          className="btn"
        >
          Video
        </button>
      </div>
    </div>
  );
};

export default friendDetailsPage;
