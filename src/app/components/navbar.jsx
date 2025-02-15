import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function () {
  return (
    <div className="navbar bg-base-100 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Service</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        <Link href={"/"}>
          <Image src={'/assets/logo.svg'} width={50} height={70} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal space-x-5 tracking-widest">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Service</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline">Appointment</a>
      </div>
    </div>
  );
}
