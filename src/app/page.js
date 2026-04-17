"use client"
import FriendCard from "@/ui/FriendCard";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import Loader from "@/components/Loader";


export default function Home() {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 1. Start as true

  useEffect(() =>{
    setIsLoading(true);
    fetch('/friends.json')
    .then(res=> res.json())
    .then(data => {
        setFriends(data);
        setIsLoading(false); // 2. Set to false when data arrives
      })
      .catch(() => setIsLoading(false));
  }, [])

  if (isLoading) {
    return <Loader></Loader> 
  }

  // console.log(friends);
  return (

    <div className="mt-28">
      

    <div className="  my-10 border-b-2 border-[#E9E9E9]">
      <h1 className="text-5xl font-bold text-center">Friends to keep close in your life</h1>
      <p className="text-center text-[#64748B] py-5">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      <div className="flex justify-center"><button className="btn bg-[#244D3F] text-white"><MdAdd className="w-5 h-5"/> Add Friend</button></div>

      <div className="grid grid-cols-2  md:grid-cols-4  gap-4 my-10">
            <div className="py-10 bg-[#FFF]  text-center rounded-2xl px-5 w-full  shadow-md">
              <p className="text-3xl font-bold ">10</p>
              <p className="text-[#64748B]">Total Friends</p>
            </div>
            <div className="py-10 bg-[#FFF]  text-center rounded-2xl px-5 w-full  shadow-md">
              <p className="text-3xl font-bold ">3</p>
              <p className="text-[#64748B]">On Track</p>
            </div>
            <div className="py-10 bg-[#FFF]  text-center rounded-2xl px-5 w-full  shadow-md">
              <p className="text-3xl font-bold ">6</p>
              <p className="text-[#64748B]">Need Attention</p>
            </div>
            <div className="py-10 bg-[#FFF]  text-center rounded-2xl px-5 w-full  shadow-md">
              <p className="text-3xl font-bold ">12</p>
              <p className="text-[#64748B]">Interactions This Month</p>
            </div>
          </div>
    </div>

      <p className="text-2xl px-5 font-semibold">My Friends</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
        {
          friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
        }
      </div>
    </div>      
  );
}
