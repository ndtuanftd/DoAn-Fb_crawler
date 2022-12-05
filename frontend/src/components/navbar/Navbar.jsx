import React from 'react';
import './navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
const Navbar = () => {
  const { logoutUser } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='items'>
          <div className='item'>
            <Dropdown>
              <Dropdown.Toggle className='drop_down'></Dropdown.Toggle>
              <Dropdown.Menu>
                <Link onClick={logoutUser}>
                  <Dropdown.Item> Logout </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
