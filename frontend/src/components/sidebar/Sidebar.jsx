import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CookieRoundedIcon from "@mui/icons-material/CookieRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Group 9</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/tool" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
              <span>Facebook User Profile</span>
            </li>
          </Link>
          <Link to="/cookies" style={{ textDecoration: "none" }}>
            <li>
              <CookieRoundedIcon className="icon" />
              <span>Verification</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">color option</div> */}
    </div>
  );
};

export default Sidebar;
