"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const Page = () => {
  const [role, setRole] = useState("guestStudent");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async () => {
    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/dashboard",
      email,
      password,
      role,
    });
  };

  const handleGuestLogin = async () => {
    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/dashboard",
      email: "guest@demo.com",
      password: "guest123",
      role: "guestStudent",
    });
  };

  return (
    <div className="flex flex-col items-center bg-[#C2F1F3]">
      <h1 className="text-3xl text-[#1E888D] py-10 font-bold">
        Welcome to Login Page
      </h1>
      <div className="bg-white text-[#12585c] w-1/3 mx-auto py-10 rounded-2xl p-4 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <span>Enter your Name</span>
          <input
            className="p-2 bg-gray-100"
            type="text"
            placeholder="eg:- Ethan Hunt"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <span>Enter your email</span>
          <input
            className="p-2 bg-gray-100"
            type="text"
            placeholder="eg:- example@xyz.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <span>Enter Password</span>
          <input
            className="p-2 bg-gray-100"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <h1>Choose type of Login</h1>
          <select
            className="w-full p-2 border rounded-md mt-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="collegeAdmin">College Admin</option>
            <option value="Profession/Volunteer">Profession/Volunteer</option>
            <option value="superAdmin">App moderator</option>
          </select>
        </div>
        <button
          onClick={handleLogin}
          className="bg-[#1E888D] hover:bg-[#0d585c] cursor-pointer rounded-md text-white font-bold p-2"
        >
          Enter
        </button>


        <div className="flex justify-evenly">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="cursor-pointer flex items-center justify-center gap-3 bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-medium shadow-md hover:bg-gray-200 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-6 w-6"
            />
            Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="cursor-pointer flex items-center justify-center gap-3 bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-medium shadow-md hover:bg-gray-200 transition"
          >
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="h-6 w-6"
            />
            Github
          </button>

          <button
            className="cursor-pointer flex items-center justify-center gap-3 bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-medium shadow-md hover:bg-gray-200 transition"
          >
            <svg
              className="h-6 w-6 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2a5 5 0 100 10 5 5 0 000-10zm-7 18a7 7 0 1114 0H5z"
                clipRule="evenodd"
              />
            </svg>
            Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
