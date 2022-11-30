import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './error.css'

const Error = () => {
  return (
    <div className='error-page'>
      <Sidebar />
      <div className='error-page-container'>
        <Navbar />
        <div className='content'>
          <center>
            <h2>
              <span className='text-primary'>404 - PAGE NOT FOUND</span>
            </h2>
            <p>The page you are looking for does not exist...</p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Error;
