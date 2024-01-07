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

const RetirementIncome = () => {
  const percentage1 = 78;
  const percentage2 = 95;
  const percentage3 = 59;

  const data = [
    {
      name: "20",
      Employer: 10,
      Employee: 20,
      TotalInterest: 30,
    },
    {
      name: "25",
      Employer: 40,
      Employee: 50,
      TotalInterest: 60,
    },
    {
      name: "30",
      Employer: 70,
      Employee: 80,
      TotalInterest: 90,
    },
    {
      name: "35",
      Employer: 100,
      Employee: 110,
      TotalInterest: 120,
    },
    {
      name: "40",
      Employer: 130,
      Employee: 140,
      TotalInterest: 150,
    },
    {
      name: "60",
      Employer: 160,
      Employee: 170,
      TotalInterest: 180,
    },
    {
      name: "65",
      Employer: 190,
      Employee: 200,
      TotalInterest: 210,
    },
  ];
  return (
    <div className="w-full md:w-[45%] text-left p-10 pt-10 bg-slate-100  flex flex-col justify-evenly">
      <div>
        <h1 className="text-blue-700 font-semibold">Retirement Income</h1>
        <p className="text-2xl">Starting Year 2056</p>
      </div>
      <div className="flex justify-between pt-10">
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
      <div className="mt-10">
        <h1 className="text-lg font-semibold">Contributions Overtime</h1>
        <div className="flex flex-col  bar:flex-row  mt-5">
          <div className="flex items-center">
            <TbOvalVerticalFilled color="indigo" size={30} />
            <h1 className="text-slate-500 font-semibold text-sm ml-1">
              Employer:
            </h1>
            <label className="ml-1 font-bold">K 73,500</label>
          </div>
          <div className="flex items-center">
            <TbOvalVerticalFilled color="blue" size={30} />
            <h1 className="text-slate-500 font-semibold text-sm ml-1">
              Employee:
            </h1>
            <label className="ml-1 font-bold">K 52,500</label>
          </div>
          <div className="flex items-center">
            <TbOvalVerticalFilled color="lightblue" size={30} />
            <h1 className="text-slate-500 font-semibold text-sm ml-1">
              Total Interest:
            </h1>
            <label className="ml-1 font-bold">K 73,500</label>
          </div>
        </div>
      </div>
      <div className=" font-semibold w-[100%] flex justify-center">
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Employer" stackId="a" fill="darkblue" />
          <Bar dataKey="Employee" stackId="a" fill="blue" />
          <Bar dataKey="TotalInterest" stackId="a" fill="lightblue" />
        </BarChart>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">How do I compare with my peers?</h1>
        <h1 className="mt-2 text-slate-500 font-semibold">
          These number represent current goal achievement
        </h1>
      </div>
      <div className="flex mt-5 justify-between">
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

        <div className="flex justify-center items-center">
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
  );
};

export default RetirementIncome;
