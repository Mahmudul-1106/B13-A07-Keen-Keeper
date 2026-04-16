"use client";
import { differenceInCalendarDays } from "date-fns";
import { TimeLineContext } from "@/context/install.context";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { use, useContext, useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import {
  MdOutlineArchive,
  MdOutlineDeleteOutline,
  MdOutlineTextsms,
} from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { CiBellOn } from "react-icons/ci";

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
  // console.log(findFriend);

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

  const {
    name,
    picture,
    status,
    tags,
    bio,
    email,
    next_due_date,
    goal,
    days_since_contact,
  } = findFriend;

  const dateObj = new Date(next_due_date);

  const dueDate = dateObj.toLocaleDateString("en-US", {
    month: "long", // "May"
    day: "2-digit", // "05"
    year: "numeric", // "2026"
  });
  return (
    <div className="flex flex-col lg:flex-row gap-4 py-10 mt-14">
      {/* <p>Timeline:{timeline.length}</p> */}
      {/* Left Side */}
      <div className="w-full lg:w-1/3">
        <div className="card py-10 bg-base-100 shadow-sm">
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
            <div
              className={`badge text-white ${status === "on-track" ? "bg-[#244D3F]" : status === "almost due" ? "bg-[#EFAD44]" : "bg-[#EF4444]"}`}
            >
              {status.toUpperCase()}
            </div>
            <div className="flex space-x-2">
              {tags.map((data, index) => (
                <div
                  key={index}
                  className="badge text-[#244D3F] bg-[#CBFADB] badge-outline"
                >
                  {data.toUpperCase()}
                </div>
              ))}
            </div>
            <p className=" px-5 text-[#64748B]">{`"${bio}"`}</p>
            <p className=" px-5 text-[#64748B]">{email}</p>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          <button className="btn  w-full">
            <CiBellOn /> Snooze 2 weeks
          </button>
          <button className="btn  w-full">
            <MdOutlineArchive /> Archive
          </button>
          <button className="btn  w-full text-red-500">
            <MdOutlineDeleteOutline /> Delete
          </button>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="py-10 bg-[#FFF]  text-center rounded-2xl px-5 w-full  shadow-md">
              <p className="text-3xl font-bold ">{days_since_contact}</p>
              <p className="text-[#64748B]">Days Since Contact</p>
            </div>

            <div className="py-10 bg-[#FFF]   text-center rounded-2xl px-5 w-full  shadow-md">
              <p className="text-3xl font-bold ">{goal}</p>
              <p className="text-[#64748B]">Goal(Days)</p>
            </div>

            <div className="py-10 bg-[#FFF]   text-center rounded-2xl px-5 w-full  shadow-md">
              <p className="text-3xl font-bold">{dueDate}</p>
              <p className="text-[#64748B]">Next Due</p>
            </div>
          </div>

          <div className="flex justify-between py-5 mt-5 bg-[#FFF]    rounded-2xl px-5 w-full  shadow-md">
            <div>
              <p className=" font-bold ">Relationship Goal</p>
              <p className="">
                Connect every{" "}
                <span className="font-bold">{goal} Days</span>{" "}
              </p>
            </div>
            <div>
              <button className="btn">Edit</button>
            </div>
          </div>

          <div className="flex flex-col py-5 mt-5 bg-[#FFF]    rounded-2xl px-5 w-full  shadow-md">
            <div>
              <p className=" font-bold ">Quick Check-In</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-5">
              <button
                className="btn w-full md:btn-wide"
                onClick={() => {
                  (setTimeline([
                    ...timeline,
                    {
                      findFriend,
                      actionType: "call",
                      time: new Date().toDateString(),
                    },
                  ]),
                    toast.success(`Call with ${name}.`));
                }}
              >
                <FiPhoneCall /> Call
              </button>

              <button
                className="btn w-full md:btn-wide"
                onClick={() => {
                  (setTimeline([
                    ...timeline,
                    {
                      findFriend,
                      actionType: "text",
                      time: new Date().toDateString(),
                    },
                  ]),
                    toast.success(`Text with ${name}.`));
                }}
              >
                <MdOutlineTextsms /> Text
              </button>
              <button
                className="btn w-full md:btn-wide"
                onClick={() => {
                  (setTimeline([
                    ...timeline,
                    {
                      findFriend,
                      actionType: "video",
                      time: new Date().toDateString(),
                    },
                  ]),
                    toast.success(`Video with ${name}.`));
                }}
              >
                <IoVideocamOutline /> Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default friendDetailsPage;
