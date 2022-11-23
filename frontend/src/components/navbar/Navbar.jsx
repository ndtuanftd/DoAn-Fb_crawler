import React from "react";
import "./navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <Dropdown>
              <Dropdown.Toggle className="drop_down"></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="#/action-1">My account</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link to="/login">Log out</Link>{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
