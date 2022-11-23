import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authen/Login";
import Signup from "./pages/authen/Signup"
// import { Signup } from "./pages/Signup/Signup";
import { Dashboard } from "./pages/Dashboard/Dashboard"
// import { Home } from './pages/home/Home';
import Cookies from './pages/cookies/Cookies';
import Tool from './pages/tool/Tool'
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
