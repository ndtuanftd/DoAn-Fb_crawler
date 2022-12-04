import { React, useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PageTitle from "../../components/pageTitle/PageTitle";
import "./dashboard.css";

import AuthContext from "../../context/AuthContext";

export const Dashboard = () => {
  const authContext = useContext(AuthContext);
  console.log("Authen context: " + authContext);
  // console.log("Authen context of user: " + authContext.Users.);
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <div className="content">
          {/* <PageTitle title={authContext.User} description={""}></PageTitle> */}
        </div>
      </div>
    </div>
  );
};
