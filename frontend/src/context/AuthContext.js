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
  const [LoginError, setLoginError] = useState('')
  const [RegisterError, setRegisterError] = useState('')

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
        setLoginError('')
        localStorage.setItem('authToken', JSON.stringify(response.data));
        navigate('/');
      })
      .catch((error) => setLoginError(()=> error.response.data.detail));
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
    .then((response) => {
      setRegisterError('')
      loginUser(username,password)
    })
    .catch((error) => setRegisterError(() => error.response.data))
  }

  let AuthData = {
    User: User,
    AuthToken: AuthToken,
    setUser: setUser,
    setAuthToken: setAuthToken,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser: registerUser,
    LoginError: LoginError,
    RegisterError: RegisterError,
  };
  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};
