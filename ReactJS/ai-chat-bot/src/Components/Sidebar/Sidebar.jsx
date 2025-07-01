import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaEdit } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {};
  return (
    <div className="bg-[#282A2C] min-h-screen w-64 text-gray-300 py-10 px-8 relative">
      <div>
        <div className="flex justify-between items-center mb-10">
          <div className="cursor-pointer hover:bg-[#6365673a] rounded-full p-3">
            <GiHamburgerMenu />
          </div>
          <div className="cursor-pointer hover:bg-[#6365673a] rounded-full p-3">
            <FaSearch />
          </div>
        </div>
        <div className="flex gap-4 items-center p-3 cursor-pointer h-10 rounded-full hover:bg-[#6365673a]">
          <FaEdit />
          <span>New Chat</span>
        </div>
        <div className="flex gap-4 items-center p-3 cursor-pointer h-10 rounded-full hover:bg-[#6365673a]">
          <CiCircleInfo />
          <span>About</span>
        </div>
      </div>
      <div className="flex gap-4 items-center absolute bottom-10 p-3 w-3/4 cursor-pointer h-10 rounded-full hover:bg-[#6365673a]">
        <IoSettingsOutline />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
