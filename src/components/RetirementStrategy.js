import React, { useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar/dist";
import { FaChevronRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const RetirementStrategy = () => {
  const [contribution, setContribution] = useState(12);
  const [retAge, setRetAge] = useState(65);
  const percentage1 = 78;
  const percentage2 = 95;
  const percentage3 = 59;
  return (
    <div className="relative w-full md:w-[28%] text-left flex flex-col justify-evenly sm:bg-slate-100 min-h-screen">
      <RxCross1 size={20} className="absolute top-0 right-2 md:hidden" />
      <div className="sm:hidden block">
        <div className="mt-8 text-left ml-8">
          <h1 className="text-xl font-bold">How do I compare with my peers?</h1>
          <h1 className="mt-2 text-slate-500 font-semibold">
            These number represent current goal achievement
          </h1>
        </div>
        <div className=" mt-5 ml-8">
          <div>
            <div className="flex">
              <h1 className="font-semibold">Age:</h1>
              <select className="ml-6 font-semibold">
                <option>Under 30</option>
              </select>
            </div>
            <hr></hr>
            <div className="flex mt-4">
              <h1 className="font-semibold">Salary:</h1>
              <select className="ml-6 font-semibold">
                <option>K 20 - K 30</option>
              </select>
            </div>
            <hr></hr>
            <div className="flex mt-4">
              <h1 className="font-semibold">Gender:</h1>
              <select className="ml-6 font-semibold">
                <option>Male</option>
              </select>
            </div>
          </div>

          <div className="flex mt-8 gap-5  justify-center items-center">
            <div className="w-28 h-28 px-2">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "green",
                })}
                value={percentage1}
                text={`${percentage1}%`}
              />
              <h1 className="text-center font-semibold">Average</h1>
            </div>
            <div className="w-28 h-28 px-2">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "green",
                })}
                value={percentage2}
                text={`${percentage2}%`}
              />
              <h1 className="text-center font-semibold">Top</h1>
            </div>
            <div className="w-28 h-28 px-2">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "green",
                })}
                value={percentage3}
                text={`${percentage3}%`}
              />
              <h1 className="text-center font-semibold">Me</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 sm:bg-slate-200 px-10 py-4 mt-4 sm:m-4 rounded-lg">
        <h1 className="text-2xl font-semibold">Retirement Strategy</h1>
        <div className="mt-5">
          <h1 className="font-semibold">Employee Contribution</h1>
          <input
            type="range"
            min="0"
            max="20"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            className="mt-2 w-[80%]"
          />
          <label className="ml-2"> {contribution}%</label>
        </div>
        <div className="mt-5">
          <h1 className="font-semibold">Retirement Age</h1>
          <input
            type="range"
            min="0"
            max="80"
            value={retAge}
            onChange={(e) => setRetAge(e.target.value)}
            className="mt-2 w-[80%]"
          />
          <label className="ml-2"> {retAge}</label>
        </div>
        <hr className="h-1 mt-5 bg-gray-300"></hr>
        <div className="flex justify-between font-semibold mt-5">
          <h1>Employer Contribution</h1>
          <h1>8.4%</h1>
        </div>
        <div className="flex justify-between font-semibold mt-5">
          <h1>Interest Rate</h1>
          <h1>5%</h1>
        </div>
        <div className="flex justify-center">
          <button className="w-full sm:w-[50%] md:w-full  bg-indigo-900 text-white  h-12  mt-4 rounded-lg ">
            Update
          </button>
        </div>

        <div className="hidden sm:flex justify-center items-center mt-10 text-blue-900 font-semibold">
          <h1>View Help Docs</h1>
          <FaChevronRight />
        </div>
      </div>
      <div className="hidden  m-4 ml-6 sm:flex">
        <div className="bg-blue-800 w-1 h-28"></div>
        <div className="ml-5">
          <h1 className="font-semibold">Are you considering a</h1>
          <h1 className="font-bold">Housing Advance?</h1>
          <h1 className="mt-2 text-sm text-gray-500 font-semibold">
            Limited time reduced interest.
          </h1>
          <div className="flex items-center text-sm font-semibold text-blue-800 mt-2">
            <h1>Learn More</h1>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementStrategy;
