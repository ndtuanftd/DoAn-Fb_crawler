import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(
    localStorage.getItem('authToken')
      ? jwt_decode(JSON.parse(localStorage.getItem('authToken')).access)
      : null,
  );
  const [AuthToken, setAuthToken] = useState(
    localStorage.getItem('authToken')
      ? JSON.parse(localStorage.getItem('authToken'))
      : null,
  );

  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    axios({
      baseURL: 'http://127.0.0.1:8000/api/token/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        setAuthToken(() => response.data);
        setUser(() => jwt_decode(response.data.access));
        localStorage.setItem('authToken', JSON.stringify(response.data));
        navigate('/');
      })
      .catch((error) => alert(error.response.data.detail));
  };

  const logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const registerUser = async (username, email, password) => {
    axios({
      baseURL: 'http://127.0.0.1:8000/api/user/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username: username,
        email: email,
        password: password,
      },
    })
    .then((response) => navigate('login/'))
    .catch((error) => alert('User with the same credential is exist.'))
  }

  let AuthData = {
    User: User,
    AuthToken: AuthToken,
    setUser: setUser,
    setAuthToken: setAuthToken,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser: registerUser,
  };
  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};
