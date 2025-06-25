import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-5 p-20">
      <div className="bg-gray-700 text-white p-6 rounded-lg text-2xl">
        <h2>
          Name: <span>Rahul</span>
        </h2>
        <h2>
          Email: <span>rahul@gmail/com</span>
        </h2>
        <h2>
          Phone: <span>1234567890</span>
        </h2>
        <div className="flex justify-between mt-4">
          <button
            className="px-6 py-2 text-base rounded-md bg-blue-400 text-white cursor-pointer"
            onClick={() => navigate("/edit-user")}
          >
            Edit
          </button>
          <button className="px-6 py-2 text-base rounded-md bg-red-400 text-white cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
