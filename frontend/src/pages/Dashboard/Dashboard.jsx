import { React, useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PageTitle from "../../components/pageTitle/PageTitle";
import "./dashboard.css";

import AuthContext from "../../context/AuthContext";
import { backdropClasses } from "@mui/material";

export const Dashboard = () => {
  const { User } = useContext(AuthContext);
  // console.log(User.username);
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <div className="content">
          <PageTitle
            title={"Welcome back, " + User.username}
            description={""}
          ></PageTitle>
        </div>
      </div>
    </div>
  );
};
