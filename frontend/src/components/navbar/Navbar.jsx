import React from "react";
import "./navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <Dropdown>
               <Dropdown.Toggle className="drop_down">
      
               </Dropdown.Toggle>
               <Dropdown.Menu>
               <Dropdown.Item href="#/action-1">My account</Dropdown.Item>
              <Dropdown.Item href="./login">Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Navbar;
