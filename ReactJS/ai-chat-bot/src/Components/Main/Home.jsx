import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#1B1C1D] flex flex-col justify-between">
      <div className="flex justify-between items-center text-white p-4">
        <h1 className="text-2xl">Gemini</h1>
        <FaRegUserCircle size={30} />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-purple-500">Hello, Manas Ranjan</h1>
      </div>
      <div className="border-2 rounded-2xl border-gray-600 p-4 max-w-5xl w-3/4 mx-auto flex flex-col text-white mb-10">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="placeholder:text-white"
        />
        <input type="file" name="" id="" />
      </div>
    </div>
  );
};

export default Home;
