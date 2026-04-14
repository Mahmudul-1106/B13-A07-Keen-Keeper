import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <Link href={`/friend/${friend.id}`} className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-5">
        <Image
          className="rounded-full"
          src={friend.picture}
          alt="Friend"
          width={100}
          height={100}
        ></Image>
      </figure>
      <div className="flex flex-col space-y-2 items-center text-center">
        <h2 className="card-title pt-2">{friend.name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
    </Link>
  );
};

export default FriendCard;
