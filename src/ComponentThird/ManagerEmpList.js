import React, { Component } from "react";
import { withRouter, useHistory } from "react-router-dom";
import ReactTable from "react-table";
import Table from "react-bootstrap/Table";

class ManagerEmpList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCluck = this.handleCluck.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/ManagerRateEmp");
  }
  handleCluck(e) {
    e.preventDefault();
    this.props.history.push("/SearchTable");
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody> */}
        </Table>
        <button onClick={this.handleClick}>Submit</button>
        <button onClick={this.handleCluck}>Search</button>
      </div>
    );
  }
}

export default withRouter(ManagerEmpList);
