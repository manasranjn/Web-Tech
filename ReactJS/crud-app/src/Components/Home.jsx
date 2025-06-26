import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        console.log(res);
        setAllData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then((res) => {
        console.log(res);
        getData();
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
  };

  return (
    <div className="grid grid-cols-3 gap-5 p-20">
      {allData.map((user) => (
        <div
          key={user.id}
          className="bg-gray-700 text-white p-6 rounded-lg text-2xl"
        >
          <h2>
            Name: <span>{user.name}</span>
          </h2>
          <h2>
            Email: <span>{user.email}</span>
          </h2>
          <h2>
            Phone: <span>{user.phone}</span>
          </h2>
          <div className="flex justify-between mt-4">
            <button
              className="px-6 py-2 text-base rounded-md bg-blue-400 text-white cursor-pointer"
              onClick={() => navigate(`/edit-user/${user.id}`)}
            >
              Edit
            </button>
            <button
              className="px-6 py-2 text-base rounded-md bg-red-400 text-white cursor-pointer"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {open && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white p-6 rounded-lg opacity-100">
            <p>Do you want to delete ?</p>
            <div className="flex justify-between mt-4">
              <button className="bg-red-500 px-6 py-2 rounded-lg cursor-pointer">
                No
              </button>
              <button className="bg-green-500 px-6 py-2 rounded-lg cursor-pointer">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
