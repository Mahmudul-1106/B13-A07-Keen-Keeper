"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className=" bg-base-100 shadow-sm py-3">
      <div className="flex flex-col sm:flex-row justify-between items-center container mx-auto">
        <div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            KeenKeeper
          </Link>
        </div>

        <div className=" space-x-1 ">
          <Link href={"/"}>
            <button
              className={`btn text-[#64748B] ${pathname === "/" && "bg-[#244D3F] text-white"} `}
            >
              Home
            </button>
          </Link>
          <Link href={"/timeline"}>
            <button
              className={`btn text-[#64748B] ${pathname === "/timeline" && "bg-[#244D3F] text-white"} `}
            >
              Timeline
            </button>
          </Link>
          <Link href={"/stats"}>
            <button
              className={`btn text-[#64748B] ${pathname === "/stats" && "bg-[#244D3F] text-white"} `}
            >
              Stats
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
