import React, { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import PageTitle from '../../components/pageTitle/PageTitle';
import { DataGrid } from '@mui/x-data-grid';

import './project.css';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Projects = () => {
  const [rows, setrows] = useState([]);
  const {User} = useContext(AuthContext)

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
      renderCell: (params) => {
        return (
          <Link to={`/project/${params.value}`}>
            <div>{params.value}</div>
          </Link>
        );
      },
    },
    {
      field: 'groupname',
      headerName: 'Group Name',
      width: 160,
      renderCell: (params) => {
        return (
          <Link
            to={
              params.getValue(params.id, 'id')
                ? `/project/${params.getValue(params.id, 'id')}`
                : ''
            }
          >
            <div>{params.value}</div>
          </Link>
        );
      },
    },
    { field: 'created_on', headerName: 'Created on', width: 160 },
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/project/?q=${User.user_id}`)
      .then((res) => {
        setrows(() => res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='projects'>
      <Sidebar />
      <div className='projectsContainer'>
        <Navbar />
        <div className='content'>
          <PageTitle title='Project Page' description='Crawled Projects' />
          <div>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              autoHeight={true}
              rowsPerPageOptions={[10]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
