import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup"
// import { Signup } from "./pages/Signup/Signup";
import { Dashboard } from "./pages/Dashboard/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/*  */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/tool' element={<Dashboard />} />
        <Route path='/dashboard/cookies' element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
