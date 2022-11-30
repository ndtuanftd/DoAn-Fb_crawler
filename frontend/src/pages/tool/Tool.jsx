import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ToolCard from "../../components/Card/Card";
import Datatable from "../../components/datatable/Datatable";
import PageTitle from "../../components/pageTitle/PageTitle";

import "./tool.css";

const Tool = () => {
  return (
    <div className="tool">
      <Sidebar />
      <div className="toolContainer">
        <Navbar />
        <div className="content">
          <PageTitle
            title="Facebook Profile Scraper"
            description="Get user profiles from Facebook Groups/Pages"
          />
          <ToolCard />
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Tool;
