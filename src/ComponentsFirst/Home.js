import React from "react";
import ManagerClick from "./ManagerClick";
import EmployeeClick from "./EmployeeClick";

const Home = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: "3rem"
      }}
    >
      <ManagerClick />
      <EmployeeClick />
    </div>
  );
};

export default Home;
