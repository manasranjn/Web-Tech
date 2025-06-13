import React from "react";

const Details = ({ name, course, place }) => {
  //   let obj = {
  //     name: "Rahul",
  //     course: "ReactJS",
  //     place: "Delhi",
  //   };
  //   console.log(obj.course);

  //   const { name, course, place } = obj;
  //   console.log(name);

  return (
    <div className="student">
      <h1>Name: {name}</h1>
      <h1>Course: {course}</h1>
      <h1>Place: {place}</h1>
    </div>
  );
};

export default Details;
