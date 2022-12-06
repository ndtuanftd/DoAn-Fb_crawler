import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PageTitle from "../../components/pageTitle/PageTitle";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import CanvasJSReact from "../../assets/canvasjs.react";
import { CanvasJSChart } from "canvasjs-react-charts";
import "./singleProject.css";

const SingleProject = () => {
  const { pk } = useParams();
  const id = parseInt(pk);
  const [list, setList] = useState([]);
  const [notFound, setNotFound] = useState(false);
  var followerPoints = [];
  var followingPoints = [];
  var locationPoints = [];

  const fetchData = async () => {
    try {
      let response = await axios({
        url: `http://localhost:8000/api/profile/?q=${id}`,
        method: 'GET',
      });
      setList(() => response.data);
    } catch (err) {
      console.log(err.message)
      setNotFound(() => true)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const columns = [
    { field: "profile_id", headerName: "Profile ID", width: 160 },
    { field: "name", headerName: "Profile Name", width: 200 },
    { field: "friend_count", headerName: "Friends Count", width: 120 },
    { field: "follower_count", headerName: "Follower Count", width: 120 },
    { field: "following_count", headerName: "Following Count", width: 120 },
    { field: "location", headerName: "Location", width: 255 },
  ];

  if (id === null || isNaN(id) || notFound) return <Navigate to={"/error"} />;

  /*
   * Archive data for plotting
   */
  // console.log("List", list);
  for (let index = 0; index < list.length; index++) {
    followerPoints.push({
      label: list[index].name,
      y: list[index].follower_count,
    });

    followingPoints.push({
      label: list[index].name,
      y: list[index].following_count,
    });
    locationPoints.push({
      label: list[index].name,
      y: list[index].location,
    });
  }

  // /* Folllower */
  // var count = followerPoints.reduce((p, c) => {
  //   var follower = c.y;
  //   if (!p.hasOwnProperty(follower)) {
  //     p[follower] = 0;
  //   }
  //   p[follower]++;
  //   return p;
  // }, {});

  // var countsExtended = Object.keys(count).map((k) => {
  //   return { label: k, y: count[k] };
  // });

  // const followerChartOption = {
  //   animationEnable: true,
  //   exportEnabled: true,
  //   theme: "light1",
  //   title: {
  //     text: "Visualization for members's followers in group",
  //   },
  //   axisX: {
  //     title: "Member",
  //     reversed: true,
  //   },
  //   axisY: {
  //     title: "Number of following",
  //     includeZero: true,
  //     // labelFormatter: addSymbols,
  //   },
  //   data: [
  //     {
  //       type: "column",
  //       indexLabel: "{y}",
  //       startAngle: -90,
  //       dataPoints: countsExtended,
  //     },
  //   ],
  // };

  /* location  */
  /* Location count */
  var locationCount = locationPoints.reduce((p, c) => {
    var location = c.y;
    if (!p.hasOwnProperty(location)) {
      p[location] = 0;
    }
    p[location]++;
    return p;
  }, {});

  var locationCountsExtended = Object.keys(locationCount).map((k) => {
    // console.log("k", k);
    return { label: k === "" ? "hidden" : k, y: locationCount[k] };
  });
  // console.log("locationCount extended", locationCountsExtended);
  // console.log("location Object", locationPoints);

  const locationChartOption = {
    animationEnable: true,
    exportEnabled: true,
    theme: "light1",
    title: {
      text: "Visualization for members by cities the group",
    },
    axisX: {
      title: "City",
      reversed: true,
    },
    axisY: {
      title: "Number of members",
      includeZero: true,
    },
    data: [
      {
        type: "column",
        indexLabel: "{y}",
        startAngle: -90,
        dataPoints: locationCountsExtended,
      },
    ],
  };

  // /* Pie chart */
  // var pieChartData = [
  //   { y: 20, label: "Airfare" },
  //   { y: 24, label: "Food & Drinks" },
  //   { y: 20, label: "Accomodation" },
  //   { y: 14, label: "Transportation" },
  //   { y: 12, label: "Activities" },
  //   { y: 10, label: "Misc" },
  // ];
  // const pieOptions = {
  //   animationEnabled: true,
  //   exportEnabled: true,
  //   theme: "light2", // "light1", "dark1", "dark2"
  //   title: {
  //     text: "Trip Expenses",
  //   },
  //   data: [
  //     {
  //       type: "pie",
  //       indexLabel: "{label}: {y}%",
  //       startAngle: -90,
  //       dataPoints: pieChartData,
  //     },
  //   ],
  // };

  return (
    <div className="projects">
      <Sidebar />
      <div className="projectsContainer">
        <Navbar />
        <div className="content">
          <PageTitle title={"Project Page"} description={`Project #${id}`} />
          <div>
            <DataGrid
              rows={list}
              columns={columns}
              pageSize={10}
              autoHeight={true}
              rowsPerPageOptions={[10]}
              getRowId={(rows) => {
                return rows.profile_id ? rows.profile_id : 0;
              }}
            />
          </div>
          <div className="Charts">
            <CanvasJSChart options={locationChartOption} />
            {/* <CanvasJSChart options={pieOptions} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
