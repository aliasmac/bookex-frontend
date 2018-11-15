import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm'
import SearchBar from './SearchBar'
import './NavBar.css'

const NavBar = ({user, login, logout, loginError, submitSearch, renderSignUp}) => {
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
              <NavLink to="/loanshelf" className={'block-link'}>
                Loan Shelf
              </NavLink>
            </div>
          :
            <div>
              <NavLink to="/" className={'block-link'} >
                Home
              </NavLink> 
              <span onClick={renderSignUp} className={'block-link'}>
                Signup
              </span>
            </div>
        }
      </div>
      <div className='center-nav'>
        <SearchBar submitSearch={submitSearch} />   
      </div>
      <div className='right-nav'>
        {
          user ? 
            <div>
              <span className='navbar-username'>{`Hello, ${user.username}!`}</span>
              <span onClick={logout} className={'block-link'}>Sign out</span>
            </div>
            :
            <LoginForm login={login}
                       error={loginError} />
        }
      </div>
    </div>
  );
}

export default NavBar;
