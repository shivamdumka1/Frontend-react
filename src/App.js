import React from "react";
import "./App.css";
import NavigationBar from "./ComponentsFirst/NavigationBar";
import ManagerClick from "./ComponentsFirst/ManagerClick";
import EmployeeClick from "./ComponentsFirst/EmployeeClick";
import Footer from "./ComponentsFirst/Footer";
import EmployeeLogin from "./ComponentsSecond/EmployeeLogin";
import ManagerLogin from "./ComponentsSecond/ManagerLogin";
import EmployeeSkillFill from "./ComponentThird/EmployeeSkillFill";
import ManagerEmpList from "./ComponentThird/ManagerEmpList";
import ManagerRateEmp from "./ComponentThird/ManagerRateEmp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchTable from "./ComponentThird/SearchTable";
import Home from "./ComponentsFirst/Home";
function App() {
  return (
    <Router history>
      <div className="App">
        <NavigationBar />
        {/* <ManagerClick />
        <EmployeeClick /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Managerlog" component={ManagerLogin} />
          <Route path="/Employeelog" component={EmployeeLogin} />
          <Route path="/EmployeeSkillFill" component={EmployeeSkillFill} />
          <Route path="/ManagerEmpList" component={ManagerEmpList} />
          <Route path="/ManagerRateEmp" component={ManagerRateEmp} />
          <Route path="/SearchTable" component={SearchTable} />
        </Switch>
        <Footer />
        {/* <EmployeeLogin /> */}
      </div>
    </Router>
  );
}

export default App;
