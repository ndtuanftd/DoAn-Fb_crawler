import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authen/Login";
import Signup from "./pages/authen/Signup"
// import { Signup } from "./pages/Signup/Signup";
import {Dashboard} from "./pages/Dashboard/Dashboard"
// import { Home } from './pages/home/Home';
import Cookies from './pages/cookies/Cookies';
import Tool from './pages/tool/Tool'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/*  */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/tool' element={<Tool />} />
        <Route path='/cookies' element={<Cookies />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
