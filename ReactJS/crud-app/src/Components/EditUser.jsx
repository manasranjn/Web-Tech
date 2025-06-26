import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  const getUser = () => {
    axios
      .get(`http://localhost:5000/users/${params.id}`)
      .then((res) => {
        console.log(res);
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
    };
    console.log(data);
    axios
      .put(`http://localhost:5000/users/${params.id}`, data)
      .then((res) => {
        console.log(res);
        navigate("/"); // redirect to home page
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-[85vh] flex justify-center items-center">
      <form className="flex flex-col gap-4 items-center justify-center bg-slate-700 px-10 py-6 rounded-lg">
        <h1 className="text-2xl text-white">Edit User</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="px-4 py-2 text-lg bg-white rounded-md outline-none border-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 text-lg bg-white rounded-md outline-none border-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter your phone"
          className="px-4 py-2 text-lg bg-white rounded-md outline-none border-none"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 px-10 py-3 rounded-sm text-white cursor-pointer"
          onClick={handleSubmit}
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
