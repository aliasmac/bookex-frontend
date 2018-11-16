import React from 'react';
import API from '../../API'
import './SignupForm.css'

class SignupForm extends React.Component {

  state = {
    username: "",
    name: "",
    password: "",
    location: "Flatiron London",
    errors: {
      username: false,
      password: false
    },
    userTaken: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault()
    let {username, password} = this.state
    if (!username || !password) {
      !username ? this.refs.username.focus() : this.refs.password.focus()
      return this.setState({
        errors: {
          username: !username ? "Username is required" : false,
          password: !password ? "Password is required" : false
        }
      })
    }
    this.signup(this.state)
    this.setState({errors: {
      username: false, 
      password: false
    }})
  }

  signup = userObj => {
    API.signup(userObj).then(user => {
      if (user.errmsg) {
        if (user.errmsg.includes('dup key')) {
          this.setState({
            errors: {
              username: "Username already taken",
              password: false
            }}, this.refs.username.select())
        }}
      else {
        this.props.setUser(user.user)
        this.setState({
          userTaken: ""
        }, () => this.props.history.push('/profile'))
      }})
      .catch (err => {
        console.log('Invalid signup caught', err)
        this.props.history.push('/signup')
    })
  }

  render() {

    return (
      <div className='right-box card'>
        <form className='signup-form' autoComplete="off">
          <h2>Sign up</h2>
          <div className="signup-input-container">
            <div className='error-msg'>
              {this.state.errors.username || this.state.userTaken}
            </div>
            <input
              name="username"
              ref="username"
              type="text"
              className={"signup-input " + 
              (this.state.errors.username ? 'signup-error' : null)}
              onChange={this.handleChange}
              value={this.state.username}
              placeholder="Enter username"
              required
              autoFocus
            />
          </div>
          <div className="signup-input-container">
            <div className='error-msg'>
              {this.state.errors.password}
            </div>
            <input
              name="password"
              ref="password"
              type="password"
              className={"signup-input " + 
              (this.state.errors.password ? 'signup-error' : null)}
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="signup-input-container">
            <div className='error-msg'>
            </div>
            <input
              name="name"
              type="text"
              className="signup-input"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="Display name"
            />
          </div>
          <div className="signup-input-container">
            <div className='error-msg'>
            </div>
            <input
              name="location"
              type="text"
              className="signup-input"
              onChange={this.handleChange}
              value={this.state.location}
              placeholder="Your location"
              required
            />
          </div>
          <button onClick={this.handleSubmit} className='main-btn'>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm


