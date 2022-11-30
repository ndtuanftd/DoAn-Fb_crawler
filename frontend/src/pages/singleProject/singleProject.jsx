import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import PageTitle from '../../components/pageTitle/PageTitle';
import { useParams, Navigate } from 'react-router-dom';

const SingleProject = () => {
  const { pk } = useParams();
  const id = parseInt(pk); 
  if (id === null || isNaN(id)) return <Navigate to={'/error'} />
  return (
    <div className='projects'>
      <Sidebar />
      <div className='projectsContainer'>
        <Navbar />
        <div className='content'>
          <PageTitle title={'Project Page'} description={`Project #${id}`} />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
