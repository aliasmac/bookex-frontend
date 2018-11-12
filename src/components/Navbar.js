import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className={'navbar'} style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>

    {
      props.username ?
      <div> 
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
      </div>
      :
      <div>
       <NavLink
       style={{ marginRight: '10px' }} 
       to="/signup"
      >
        Signup
      </NavLink>
      <NavLink
       style={{ marginRight: '10px' }} 
       to="/login"
     >
        Login 
     </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/home"
      >
        HomePage
      </NavLink> 
      </div>
    }
      
     
    </div>
  );
}

export default NavBar;
