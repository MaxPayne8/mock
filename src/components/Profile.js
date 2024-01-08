import React from "react";
import { IoNotifications } from "react-icons/io5";

import { FaCaretDown } from "react-icons/fa";
import HorizontalNav from "./HorizontalNav";
const Profile = () => {
  return (
    <div className=" w-full min-h-screen p-10 md:w-[25%]  sm:bg-slate-200 flex flex-col relative  justify-evenly">
      <IoNotifications size={20} className="absolute top-4 right-4 md:hidden" />
      <div className="flex-row sm:flex-col bar:flex-row  flex items-center">
        <img
          src="https://images.generated.photos/mpaIMRVE3zPmD-h7GEYEWnQVSq3FV8Z6_TAX6KNy7RQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjcwMDgwLmpwZw.jpg"
          alt="profile"
          className="w-32 h-32 rounded-full"
        />
        <div className="ml-4">
          <h1 className=" text-2xl bar:text-4xl">Hi Mike,</h1>
          <h2 className="text-sm bar:text-base">Welcome Back.</h2>
        </div>
      </div>
      <div className=" mt-6 sm:mt-4 text-left bg-slate-100 sm:bg-slate-200 rounded-lg">
        <div className="p-4 sm:p-0">
          <h1 className="font-bold pb-6 text-lg">Today</h1>
          <div>
            <h1 className="text-3xl font-bold">$19,882</h1>
            <p className="text-gray-500 font-semibold">Account Balance</p>
          </div>
          <div className="flex flex-row sm:flex-col">
            <div className="py-2">
              <h1 className="font-bold">$4,000</h1>
              <p className="text-gray-500 font-semibold text-sm">
                Year-to-Date
                <span className="hidden sm:block"> Contributions</span>
              </p>
            </div>
            <div className="py-2 ml-6 sm:ml-0">
              <h1 className="font-bold">$1,892</h1>
              <p className="text-gray-500 font-semibold text-sm">
                Total Interest
              </p>
            </div>
          </div>

          <select className="p-2 mt-3 hidden sm:block w-32 bg-blue-800 text-white rounded-lg">
            <option> I want to</option>
          </select>
          <button className="flex items-center p-3 bg-indigo-800 w-56 my-6  text-white rounded-lg sm:hidden">
            <h1 className=" mx-auto">I want to...</h1>
          </button>
        </div>
      </div>

      <div className="py-6 mt-6 sm:mt-0 rounded-lg bg-slate-100 sm:bg-slate-200 text-left">
        <div className="p-4 sm:p-0">
          <h1 className="font-bold py-6 text-lg">Recent Transactions</h1>
          <div>
            <p className="text-gray-500 font-semibold">2020-08-07</p>
            <h1 className=" font-bold">Withdrawal Transfer to Bank-XXX11</h1>
          </div>
          <hr className="h-1 hidden sm:block bg-gray-300"></hr>
          <div className="py-2 hidden sm:block">
            <p className="text-gray-500 font-semibold">2020-08-07</p>
            <h1 className=" font-bold">Withdrawal Transfer to Bank-XXX11</h1>
          </div>
          <hr className="h-1 hidden sm:block bg-gray-300"></hr>
          <div className="py-2 hidden sm:block">
            <p className="text-gray-500 font-semibold">2020-08-07</p>
            <h1 className=" font-bold">Withdrawal Transfer to Bank-XXX11</h1>
          </div>
          <hr className="h-1 hidden sm:block bg-gray-300"></hr>
        </div>
      </div>
      <HorizontalNav />
    </div>
  );
};

export default Profile;
