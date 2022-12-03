import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import PageTitle from '../../components/pageTitle/PageTitle';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const SingleProject = () => {
  const { pk } = useParams();
  const id = parseInt(pk); 
  const [list, setList] = useState([])
  const [notFound, setNotFound] = useState(false)
  
  useEffect(() => {
    axios({
      url: `http://localhost:8000/api/profile/?q=${id}`,
      method: 'GET',
    })
      .then((res) => {
        setList(() => res.data);
      })
      .catch((err) => {
        console.log(err)
        setNotFound(true)
      });
  }, []);

   const columns = [
     { field: 'profile_id', headerName: 'Profile ID', width: 160 },
     {field: 'name', headerName: 'Profile Name', width: 255},
     {field: 'friend_count', headerName: 'Friends Count', width: 120},
     {field: 'follower_count', headerName: 'Follower Count', width: 120},
     {field: 'following_count', headerName: 'Following Count', width: 120},
   ];

  if (id === null || isNaN(id) || notFound) return <Navigate to={'/error'} />
  
  return (
    <div className='projects'>
      <Sidebar />
      <div className='projectsContainer'>
        <Navbar />
        <div className='content'>
          <PageTitle title={'Project Page'} description={`Project #${id}`} />
          <div>
            <DataGrid 
              rows={list}
              columns={columns}
              pageSize={10}
              autoHeight={true}
              rowsPerPageOptions={[10]}
              getRowId={(rows) => {
                return rows.profile_id ? rows.profile_id : 0
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
