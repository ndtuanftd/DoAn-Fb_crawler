import React from "react";
import "./navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
const Navbar = () => {
  const {logoutUser} = useContext(AuthContext)
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
                  <Link onClick={logoutUser}>Log out</Link>{" "}
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
