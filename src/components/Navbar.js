import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({user, logout}) => {
  return (
    <div className={'navbar'} style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', zIndex: 1 }}>
      <div className='left-nav'>
        {
          user 
          ?
            <div> 
              <NavLink to="/"style={{ marginRight: '10px' }} >
                Home
              </NavLink> 
              <NavLink to="/profile" style={{ marginRight: '10px' }} >
                Profile
              </NavLink>
            </div>
          :
            <div>
            <NavLink to="/" style={{ marginRight: '10px' }} >
              Home
            </NavLink> 
            <NavLink to="/signup" style={{ marginRight: '10px' }} >
              Signup
            </NavLink>
            <NavLink to="/login" style={{ marginRight: '10px' }} >
              Login 
            </NavLink>

            </div>
        }
      </div>
      <div className='right-nav'>
        {
          user ?
            `Hello, ${user.username}!` 
            :
            `International Book Database (IBDB)`
        }
        {
          user ? 
            <button onClick={logout}>SIGN OUT</button> 
            :
            null
        }
      </div>
    </div>
  );
}

export default NavBar;
