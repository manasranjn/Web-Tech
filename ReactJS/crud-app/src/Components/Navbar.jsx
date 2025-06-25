import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-20 flex justify-around items-center bg-[#090040]">
      <button
        className="cursor-pointer bg-cyan-700 px-10 py-3 rounded-lg text-white"
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <button
        className="cursor-pointer bg-cyan-700 px-10 py-3 rounded-lg text-white"
        onClick={() => navigate("/create-user")}
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;
