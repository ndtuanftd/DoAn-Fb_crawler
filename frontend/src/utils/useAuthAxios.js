import axios from 'axios';
import { useContext } from 'react';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';

import AuthContext from '../context/AuthContext';

const baseURL = 'http://127.0.0.1:8000/api/';

const useAuthAxios = () => {
  const { AuthToken, setUser, setAuthToken } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${AuthToken?.access}`,
    },
  });

  axiosInstance.interceptors.request.use(async (request) => {
    const user = jwt_decode(AuthToken?.access);
    const isExp = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (isExp) {
      let response = await axios.post(`${baseURL}token/refresh`, {
        refresh: AuthToken?.refresh,
      });

      localStorage.setItem('authToken', JSON.stringify(response.data));
      request.headers.Authorization = `Bearer ${response.data.access}`;
      setAuthToken(() => response.data);
      setUser(() => jwt_decode(response.data.access));
    }

    return request;
  });

  return axiosInstance;
};

export default useAuthAxios;
