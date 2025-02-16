"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password };

    try {
      const res = await axios.post("http://localhost:3000/register/api/register", userInfo);
      console.log("Saved:", res.data);
      alert("Menu added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add menu. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Email</span>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <button className="w-full h-12 bg-orange-500 text-white font-bold">
        Sign Up
      </button>
      <p className="text-center">Or Sign In with</p>
      {/* <SocialLogin /> */}
      <p className="text-center">
        Don't Have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
}
