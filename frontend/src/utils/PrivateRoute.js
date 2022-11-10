import { Outlet, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function PrivateRoute() {
  let { User } = useContext(AuthContext);
  return User ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoute;
