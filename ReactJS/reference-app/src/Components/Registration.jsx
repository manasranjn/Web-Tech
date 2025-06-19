import React, { useRef } from "react";

const Registration = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitData = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    console.log(name, email, password);
  };

  return (
    <div id="registration">
      <form action="" id="form">
        <input type="text" placeholder="Enter your name" ref={nameRef} />
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button onClick={submitData}>Register</button>
      </form>
    </div>
  );
};

export default Registration;
