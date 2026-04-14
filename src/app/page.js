"use client"
import FriendCard from "@/ui/FriendCard";
import Image from "next/image";
import { use, useEffect, useState } from "react";


export default function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() =>{
    fetch('/friends.json')
    .then(res=> res.json())
    .then(data=> setFriends(data))
  }, [])

  console.log(friends);
  return (

    <div>
      <p className="  my-10 text-2xl font-bold py-20 text-red-400 text-center border-b-2 border-[#E9E9E9]">Banner coming</p>
      <p className="text-2xl font-semibold">My Friends</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
        {
          friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
        }
      </div>
    </div>      
  );
}
