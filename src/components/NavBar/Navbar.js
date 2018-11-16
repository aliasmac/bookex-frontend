import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'
import logo from '../../logo.png'

const NavBar = ({user, login, logout, loginError, submitSearch, renderSignUp, location, history, getSuggestions}) => {
  return (
    <div className={'navbar'} style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', zIndex: 1 }}>
      <div className='left-nav'>
        <img src={logo} className='logo' alt='logo' onClick={() => {
          getSuggestions()
          history.push('/')
        } 
        }/>
        {
          user 
          ?
            <div> 
              <NavLink to="/" className={'block-link ' + 
              (location.pathname === '/' ? ' active-route' : null) } >
                Home
              </NavLink> 
              <NavLink to="/profile" className={'block-link ' + (location.pathname === '/profile' ? ' active-route' : null) } >
                Profile
              </NavLink>
              <NavLink to="/loanshelf" className={'block-link ' + (location.pathname === '/loanshelf' ? ' active-route' : null)}>
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
