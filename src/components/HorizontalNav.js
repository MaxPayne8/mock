import React from "react";
import { IoMdHome } from "react-icons/io";

import { FaSearch, FaRegNewspaper } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const HorizontalNav = () => {
  return (
    <div className="block md:hidden">
      <ul className="flex justify-between">
        <li className="hover:bg-blue-800 p-2  rounded-lg">
          <IoMdHome size={30} />
        </li>
        <li className="hover:bg-blue-800  p-2  rounded-lg">
          <FaRegNewspaper size={30} />
        </li>
        <li className="hover:bg-blue-800  p-2  rounded-lg">
          <MdFormatListBulleted size={30} />
        </li>
        <li className="hover:bg-blue-800  p-2  rounded-lg">
          <CgProfile size={30} />
        </li>
        <li className="hover:bg-blue-800  p-2  rounded-lg">
          <FaSearch size={30} />
        </li>
      </ul>
    </div>
  );
};

export default HorizontalNav;
