import React from "react";
import "./App.css"
import StudentDetails from "./Components/StudentDetails";
import Navbar from "./Components/Navbar";
import ClassComponent from "./Components/ClassComponent";

const App = () => {
  return (
    <div>
      {/* <h1>App</h1>
      <h1>First Component</h1>
      <StudentDetails /> */}
      <Navbar />
      <ClassComponent />
    </div>
  )
}

export default App;