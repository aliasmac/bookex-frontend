import React from 'react';
import './LoginForm.css'

class LoginForm extends React.Component {
  
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    this.props.login(username, password)
    this.setState({
      username: '',
      password: ''
    }) 
  }

  render() {
    return (
      <div class='login-form-container'>
        <div>
        <form className='login-form' noValidate autoComplete="off" >
            <span class='login-error-msg'>{this.props.error}</span>
          <input
            name="username"
            type="text"
            className='login-input'
            onChange={this.handleChange}
            value={this.state.username}
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            className='login-input'
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="Password"
          />
          <button className='btn-black login-btn' onClick={this.handleSubmit}>
            Login
          </button>
        </form>
        </div>
      </div>
    );
  }
}

export default LoginForm


