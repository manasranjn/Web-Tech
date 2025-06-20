import React, { useRef } from "react";

const Uncontrolled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const handleSubmit = (e) => {
    // e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;
    const details = {
      name,
      email,
      age,
    };
    console.log(details);
  };

  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form action={handleSubmit}>
        <input type="text" placeholder="Enter your name" ref={nameRef} />
        <input type="text" placeholder="Enter your email" ref={emailRef} />
        <input type="text" placeholder="Enter your age" ref={ageRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Uncontrolled;
