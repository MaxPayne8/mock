import React from "react";

const Profile = () => {
  return (
    <div className=" w-full p-10 md:w-[25%]  bg-slate-200 flex flex-col  justify-evenly">
      <div className="flex-col  bar:flex-row flex items-center">
        <img
          src="https://images.generated.photos/mpaIMRVE3zPmD-h7GEYEWnQVSq3FV8Z6_TAX6KNy7RQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjcwMDgwLmpwZw.jpg"
          alt="profile"
          className="w-32 h-32 rounded-full"
        />
        <div className="md:ml-4">
          <h1 className=" text-2xl bar:text-4xl">Hi Mike,</h1>
          <h2 className="text-sm bar:text-base">Welcome Back.</h2>
        </div>
      </div>
      <div className="py-6">
        <h1 className="font-bold pb-6 text-lg">Today</h1>
        <div>
          <h1 className="text-3xl font-bold">$19,882</h1>
          <p className="text-gray-500 font-semibold">Account Balance</p>
        </div>
        <div className="py-2">
          <h1 className="font-bold">$4,000</h1>
          <p className="text-gray-500 font-semibold text-sm">
            Year-to-Date Contributions
          </p>
        </div>
        <div className="py-2">
          <h1 className="font-bold">$1,892</h1>
          <p className="text-gray-500 font-semibold text-sm">Total Interest</p>
        </div>
      </div>
      <select className="p-2 bg-blue-800 text-white rounded-lg">
        <option> I want to</option>
      </select>
      <div className="py-6">
        <h1 className="font-bold py-6 text-lg">Recent Transactions</h1>
        <div>
          <p className="text-gray-500 font-semibold">2020-08-07</p>
          <h1 className=" font-bold">Withdrawal Transfer to Bank-XXX11</h1>
        </div>
        <hr className="h-1 bg-gray-300"></hr>
        <div className="py-2">
          <p className="text-gray-500 font-semibold">2020-08-07</p>
          <h1 className=" font-bold">Withdrawal Transfer to Bank-XXX11</h1>
        </div>
        <hr className="h-1 bg-gray-300"></hr>
        <div className="py-2">
          <p className="text-gray-500 font-semibold">2020-08-07</p>
          <h1 className=" font-bold">Withdrawal Transfer to Bank-XXX11</h1>
        </div>
        <hr className="h-1 bg-gray-300"></hr>
      </div>
    </div>
  );
};

export default Profile;
