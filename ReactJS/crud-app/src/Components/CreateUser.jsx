import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [failed, setFailed] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      console.log("Please enter all fields");
      setError("Please enter all fields");
      return;
    }

    const data = {
      name,
      email,
      phone,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/users", data)
      .then((res) => {
        console.log(res);
        console.log("User created successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log("Error creating user");
        setFailed(true);
      });
  };

  return (
    <div className="h-[85vh] flex justify-center items-center">
      <form className="flex flex-col gap-4 items-center justify-center bg-slate-700 px-10 py-6 rounded-lg">
        <h1 className="text-2xl text-white">Create User</h1>
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="px-4 py-2 text-lg bg-white rounded-md outline-none border-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="px-4 py-2 text-lg bg-white rounded-md outline-none border-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter your phone"
          required
          className="px-4 py-2 text-lg bg-white rounded-md outline-none border-none"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 px-10 py-3 rounded-sm text-white cursor-pointer"
          onClick={handleSubmit}
        >
          Create User
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {failed && <p className="text-red-500">Failed to create user</p>}
      </form>
    </div>
  );
};

export default CreateUser;
