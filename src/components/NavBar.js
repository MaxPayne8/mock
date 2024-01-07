import React from "react";
import { IoMdHome, IoMdExit } from "react-icons/io";

import { FaSearch, FaRegNewspaper } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { PiButterflyDuotone } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className=" flex-col justify-between min-h-screen hidden md:flex ">
      <div>
        <PiButterflyDuotone
          className=" m-2 my-4 p-2 hover:rounded-lg    "
          size={40}
          color="blue"
        />
        <FaSearch
          className=" m-2 my-4 p-2 hover:rounded-lg  hover:bg-blue-800 hover:cursor-pointer duration-200  ease-in-out "
          size={40}
        />
      </div>
      <div>
        <IoMdHome
          className=" m-2 my-4 p-2 hover:rounded-lg hover:bg-blue-800 hover:cursor-pointer duration-200  ease-in-out "
          size={40}
        />

        <FaRegNewspaper
          className=" m-2 my-4 p-2 hover:rounded-lg hover:bg-blue-800 hover:cursor-pointer duration-200  ease-in-out"
          size={40}
        />
        <MdFormatListBulleted
          className=" m-2 my-4 p-2 hover:rounded-lg hover:bg-blue-800 hover:cursor-pointer duration-200  ease-in-out"
          size={40}
        />
        <CgProfile
          className=" m-2 my-4 p-2 hover:rounded-lg hover:bg-blue-800 hover:cursor-pointer duration-200  ease-in-out"
          size={40}
        />
      </div>
      <div>
        <IoNotifications
          className=" m-2 my-4 p-2 hover:rounded-lg hover:bg-blue-800  hover:cursor-pointer duration-200  ease-in-out"
          size={40}
        />
        <IoMdExit
          className=" m-2 my-4 p-2 hover:rounded-lg hover:bg-blue-800 hover:cursor-pointer duration-200  ease-in-out"
          size={40}
        />
      </div>
    </div>
  );
};

export default NavBar;
