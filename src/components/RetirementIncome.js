import React from "react";
import { TbOvalVerticalFilled } from "react-icons/tb";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IoNotifications } from "react-icons/io5";
import HorizontalNav from "./HorizontalNav";

const RetirementIncome = () => {
  const percentage1 = 78;
  const percentage2 = 95;
  const percentage3 = 59;

  const dataDesktop = [
    {
      name: "20",
      Employer: 10,
      Employee: 20,
      TotalInterest: 30,
    },
    {
      Employer: 15,
      Employee: 25,
      TotalInterest: 35,
    },
    {
      name: "25",
      Employer: 20,
      Employee: 30,
      TotalInterest: 40,
    },
    {
      Employer: 25,
      Employee: 35,
      TotalInterest: 45,
    },
    {
      name: "30",
      Employer: 30,
      Employee: 40,
      TotalInterest: 50,
    },
    {
      Employer: 35,
      Employee: 45,
      TotalInterest: 55,
    },
    {
      name: "35",
      Employer: 40,
      Employee: 50,
      TotalInterest: 60,
    },
    {
      Employer: 45,
      Employee: 55,
      TotalInterest: 65,
    },
    {
      name: "40",
      Employer: 50,
      Employee: 60,
      TotalInterest: 70,
    },
    {
      Employer: 55,
      Employee: 65,
      TotalInterest: 75,
    },
    {
      name: "60",
      Employer: 60,
      Employee: 70,
      TotalInterest: 80,
    },
    {
      Employer: 65,
      Employee: 75,
      TotalInterest: 85,
    },
    {
      name: "65",
      Employer: 70,
      Employee: 80,
      TotalInterest: 90,
    },
  ];

  const dataMob = [
    {
      name: "20",
      Employer: 10,
      Employee: 20,
      TotalInterest: 30,
    },

    {
      name: "25",
      Employer: 20,
      Employee: 30,
      TotalInterest: 40,
    },

    {
      name: "30",
      Employer: 30,
      Employee: 40,
      TotalInterest: 50,
    },

    {
      name: "35",
      Employer: 40,
      Employee: 50,
      TotalInterest: 60,
    },

    {
      name: "40",
      Employer: 50,
      Employee: 60,
      TotalInterest: 70,
    },

    {
      name: "60",
      Employer: 60,
      Employee: 70,
      TotalInterest: 80,
    },

    {
      name: "65",
      Employer: 70,
      Employee: 80,
      TotalInterest: 90,
    },
  ];
  return (
    <div className="w-full relative min-h-screen md:w-[45%] text-left p-10 pt-10 sm:bg-slate-100  flex flex-col justify-evenly">
      <IoNotifications size={20} className="absolute top-4 right-4 md:hidden" />
      <div>
        <h1 className="text-blue-700 font-semibold">Retirement Income</h1>
        <p className="text-2xl">Starting Year 2056</p>
      </div>
      <div className="sm:flex flex-row hidden  justify-between pt-10">
        <div className="pr-10">
          <h1 className="font-semibold text-2xl ">$300,000</h1>
          <p className="text-slate-500 text-sm">My Goal</p>
          <hr className="mt-2 bg-blue-800 h-[3px]"></hr>
        </div>
        <div className="pr-10">
          <h1 className="font-semibold text-2xl  ">59%</h1>
          <p className="text-slate-500 text-sm">Goal Achieved</p>
          <hr className="mt-2 bg-blue-800 h-[3px]"></hr>
        </div>
        <div>
          <h1 className="font-semibold text-2xl ">$300</h1>
          <p className="text-slate-500 text-sm">Est. Monthly Income</p>
          <hr className="mt-2 bg-blue-800 h-[3px]"></hr>
        </div>
      </div>
      <div className=" sm:hidden  justify-between pt-10">
        <div className="pr-10">
          <h1 className="font-semibold text-2xl ">$300,000</h1>
          <p className="text-slate-500 text-sm">My Goal</p>
          <hr className="mt-2 bg-blue-800 h-[3px]"></hr>
        </div>
        <div className="flex justify-between mt-2">
          <div className="pr-10">
            <h1 className="font-semibold text-2xl  ">59%</h1>
            <p className="text-slate-500 text-sm">Goal Achieved</p>
            <hr className="mt-2 bg-blue-800 h-[3px]"></hr>
          </div>
          <div>
            <h1 className="font-semibold text-2xl ">K 300</h1>
            <p className="text-slate-500 text-sm">Est. Monthly Income</p>
            <hr className="mt-2 bg-blue-800 h-[3px]"></hr>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-lg font-semibold">Contributions Overtime</h1>
        <div className="flex md:flex-col  bar:flex-row justify-between bar:justify-normal  mt-5">
          <div className="flex flex-col sm:flex-row items-center">
            <TbOvalVerticalFilled color="indigo" size={30} />
            <h1 className="text-slate-500 font-semibold text-sm ml-1">
              Employer:
            </h1>
            <label className="ml-1 font-bold text-sm ">K 73,500</label>
          </div>
          <div className="flex flex-col sm:flex-row  items-center">
            <TbOvalVerticalFilled color="blue" size={30} />
            <h1 className="text-slate-500 font-semibold text-sm ml-1">
              Employee:
            </h1>
            <label className="ml-1 font-bold" text-sm>
              K 52,500
            </label>
          </div>
          <div className="flex flex-col sm:flex-row  items-center">
            <TbOvalVerticalFilled color="lightblue" size={30} />
            <h1 className="text-slate-500 font-semibold text-sm ml-1">
              Total Interest:
            </h1>
            <label className="ml-1 font-bold text-sm ">K 244,313</label>
          </div>
        </div>
      </div>
      <div className="relative sm:hidden font-semibold w-[100%] flex justify-center">
        <label className="absolute top-14 md:top-14 lg:top-4  z-10 right-0 ">
          {" "}
          ✅
        </label>
        <BarChart width={600} height={300} data={dataMob}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="Employer" stackId="a" fill="darkblue" />
          <Bar dataKey="Employee" stackId="a" fill="blue" />
          <Bar dataKey="TotalInterest" stackId="a" fill="lightblue" />
        </BarChart>
      </div>
      <div className="hidden relative font-semibold w-[100%] sm:flex justify-center">
        <label className="absolute top-14 md:top-16 lg:top-8  z-10 right-0 ">
          {" "}
          ✅
        </label>
        <BarChart width={600} height={300} data={dataDesktop}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="Employer" stackId="a" fill="darkblue" />
          <Bar dataKey="Employee" stackId="a" fill="blue" />
          <Bar dataKey="TotalInterest" stackId="a" fill="lightblue" />
        </BarChart>
      </div>
      <div className="hidden sm:block">
        <div className="mt-8">
          <h1 className="text-xl font-bold">How do I compare with my peers?</h1>
          <h1 className="mt-2 text-slate-500 font-semibold">
            These number represent current goal achievement
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row mt-5 justify-between">
          <div>
            <div className="flex">
              <h1 className="font-semibold">Age:</h1>
              <select className="ml-2">
                <option>Under 30</option>
              </select>
            </div>
            <hr></hr>
            <div className="flex mt-4">
              <h1 className="font-semibold">Salary:</h1>
              <select className="ml-2">
                <option>K 20 - K 30</option>
              </select>
            </div>
            <hr></hr>
            <div className="flex mt-4">
              <h1 className="font-semibold">Gender:</h1>
              <select className="ml-2">
                <option>Male</option>
              </select>
            </div>
          </div>

          <div className="flex mt-4 gap-5 sm:gap-1 justify-center items-center">
            <div className="w-14 h-14 bar:w-28 bar:h-28 px-2">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "green",
                })}
                value={percentage1}
                text={`${percentage1}%`}
              />
              <h1 className="text-center font-semibold">Average</h1>
            </div>
            <div className="w-14 h-14 bar:w-28 bar:h-28 px-2">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "green",
                })}
                value={percentage2}
                text={`${percentage2}%`}
              />
              <h1 className="text-center font-semibold">Top</h1>
            </div>
            <div className="w-14 h-14 bar:w-28 bar:h-28 px-2">
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
      <HorizontalNav />
      <hr className="h-1 bg-gray-200 mt-4 sm:hidden"></hr>
    </div>
  );
};

export default RetirementIncome;
