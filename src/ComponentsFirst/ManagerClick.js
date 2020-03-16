import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
class ManagerClick extends React.Component {
  render() {
    return (
      <div style={{ width: "25%" }}>
        <Jumbotron className="bg-dark text-white">
          <div class="card">
            <img
              class="card-img-top"
              src="https://www.shareicon.net/data/128x128/2016/07/08/116927_man_512x512.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <Link to="/Managerlog" class="card-text">
                Manager
              </Link>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
export default ManagerClick;
