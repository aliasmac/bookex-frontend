import React from 'react'

import logo from '../logo.svg'

const Header = props =>
  <header className='app-header'>
    <img className="gif" src="https://media.giphy.com/media/3o85xBwvWcj1Z11Gda/giphy.gif" />
    <h2 className='App-title'>
      {
        props.username ?
          `Welcome back, ${props.username}!` :
          `Welcome to the International Book Database (IBDB)`
      }
      <br />
      {
        props.username &&
          <button onClick={props.logout}>SIGN OUT</button>
      }
    </h2>
  </header>

export default Header
