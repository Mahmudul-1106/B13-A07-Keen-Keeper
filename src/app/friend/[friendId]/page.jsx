"use client";
import { useParams } from "next/navigation";
import React from "react";

const friendDetailsPage = () => {
  const { friendId } = useParams();
  console.log(friendId);
  return (
    <div>
      <p>Friend Details Page</p>
    </div>
  );
};

export default friendDetailsPage;
