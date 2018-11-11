import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/home"
      >
        HomePage
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }} 
        to="/login"
      >
         Login 
      </NavLink>
    </div>
  );
}

export default NavBar;
