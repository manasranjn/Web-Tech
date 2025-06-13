import React from "react";

const StudentDetails = (props) => {
  console.log(props);

  return (
    <div className="student">
      <h1>Name: {props.name}</h1>
      <h1>Course: {props.course}</h1>
      <h1>Place: {props.place}</h1>
    </div>
  );
};

export default StudentDetails;
