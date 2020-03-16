import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
class EmployeeClick extends React.Component {
  render() {
    return (
      <div style={{ width: "25%" }}>
        <Jumbotron className="bg-dark text-white">
          <div class="card">
            <img
              class="card-img-top"
              src="https://www.svgrepo.com/show/28735/employee.svg"
              alt="Card image cap"
            />
            <div class="card-body">
              <Link to="/EmployeeLog" class="card-text">
                Employee
              </Link>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
export default EmployeeClick;
