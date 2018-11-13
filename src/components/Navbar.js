import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm'
import SearchBar from './SearchBar'

const NavBar = ({user, login, logout, submitSearch}) => {
  return (
    <div className={'navbar'} style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', zIndex: 1 }}>
      <div className='left-nav'>
        {
          user 
          ?
            <div> 
              <NavLink to="/" className={'block-link'} >
                Home
              </NavLink> 
              <NavLink to="/profile" className={'block-link'} >
                Profile
              </NavLink>
            </div>
          :
            <div>
            <NavLink to="/" className={'block-link'} >
              Home
            </NavLink> 
            <NavLink to="/signup" className={'block-link'} >
              Signup
            </NavLink>

            </div>
        }
      </div>
      <div className='center-nav'>
        <SearchBar className="search-bar"
          submitSearch={submitSearch} />   
        {
          user ?
            `Hello, ${user.username}!`
            :
            `International Book Database`
        }

      </div>
      <div className='right-nav'>
        {
          user ? 
            <span onClick={logout} className={'block-link'}>Sign out</span>
            :
            <LoginForm login={login} />
        }
      </div>
    </div>
  );
}

export default NavBar;
