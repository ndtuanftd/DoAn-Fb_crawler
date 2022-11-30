import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authen/Login';
import Signup from './pages/authen/Signup';
// import { Signup } from "./pages/Signup/Signup";
import { Dashboard } from './pages/Dashboard/Dashboard';
// import { Home } from './pages/home/Home';
import Cookies from './pages/cookies/Cookies';
import Projects from './pages/project/project';
import Tool from './pages/tool/Tool';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import Error from './pages/error/error';
import SingleProject from './pages/singleProject/singleProject';
import { ToolProvider } from './context/ProfileContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToolProvider>
          <Routes>
            {/* Login */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            {/*  */}
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/tool' element={<Tool />} />
              <Route path='/cookies' element={<Cookies />} />
              <Route path='/project' element={<Projects />} />
              <Route path='/project/:pk' element={<SingleProject />} />
            </Route>
            <Route path='/error' element={<Error />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </ToolProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
