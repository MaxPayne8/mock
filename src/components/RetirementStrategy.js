import { RangeSlider } from "@appbaseio/reactivesearch";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const RetirementStrategy = () => {
  const [contribution, setContribution] = useState(12);
  const [retAge, setRetAge] = useState(65);
  return (
    <div className="w-full md:w-[28%] text-left flex flex-col justify-evenly bg-slate-100">
      <div className=" bg-slate-200 px-10 py-4 m-4 rounded-lg">
        <h1 className="text-2xl font-semibold">Retirement Strategy</h1>
        <div className="mt-5">
          <h1 className="font-semibold">Employee Contribution</h1>
          <input
            type="range"
            min="0"
            max="20"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            className="mt-2"
          />
          {contribution}%
        </div>
        <div className="mt-5">
          <h1 className="font-semibold">Retirement Age</h1>
          <input
            type="range"
            min="0"
            max="80"
            value={retAge}
            onChange={(e) => setRetAge(e.target.value)}
            className="mt-2"
          />
          {retAge}
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
        <button className="w-full bg-indigo-900 text-white  h-12  mt-4 rounded-lg ">
          Update
        </button>
        <div className="flex justify-center items-center mt-10 text-blue-900 font-semibold">
          <h1>View Help Docs</h1>
          <FaChevronRight />
        </div>
      </div>
      <div className="m-4 ml-6 flex">
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
