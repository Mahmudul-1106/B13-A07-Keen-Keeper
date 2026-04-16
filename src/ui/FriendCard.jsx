import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
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
  } = friend;

  return (
    <Link
      href={`/friend/${friend.id}`}
      className="card bg-base-100 shadow-sm py-10 px-2 "
    >
      <figure className="px-10 ">
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

        <p className="text-[#64748B]">{days_since_contact} days</p>

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

        <div
          className={`badge text-white ${status === "on-track" ? "bg-[#244D3F]" : status === "almost due" ? "bg-[#EFAD44]" : "bg-[#EF4444]"}`}
        >
          {status.toUpperCase()}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
