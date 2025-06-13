import React from "react";
import "./App.css";
import StudentDetails from "./Components/StudentDetails";
import Orders from "./Components/Orders";
import Details from "./Components/Details";
import AllPost from "./Components/AllPost";

const App = () => {
  return (
    <div className="App">
      {/* <StudentDetails name="A" course="B" place="C" />
      <StudentDetails name="Akshita" course="Web-Development" place="India" />
      <StudentDetails name="Koushik" course="Web-Development" place="India" />
      <StudentDetails name="John" course="Web-Development" place="India" />
      <StudentDetails name="Rahul" course="Web-Development" place="India" /> */}

      {/* <Details name="Rahul" course="Web-Development" place="India" />
      <Details name="Rahul" course="Web-Development" place="India" /> */}

      {/* <Orders order={{ id: 1, status: "Pending", amount: 100 }} /> */}

      <AllPost comment="Nice Post" />
    </div>
  );
};

export default App;
