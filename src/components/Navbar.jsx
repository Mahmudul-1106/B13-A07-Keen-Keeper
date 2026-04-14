"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
          <Link href={"/"} className="btn btn-ghost text-xl">
            KeenKeeper
          </Link>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end space-x-1 ">
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
