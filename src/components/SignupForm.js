import React from 'react';
import './SignupForm.css'

class SignupForm extends React.Component {
  
  state = {
    username: "",
    name: "",
    password: "",
    location: "Flatiron London",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    this.props.signup(this.state)
    // this.setState({
    //   username: "",
    //   name: "",
    //   password: "",
    //   location: "Flatiron London"
    // })    
  }

  render() {

    return (
      <div className='right-box card'>
        <form className='signup-form' autoComplete="off">
          <h2>Sign up</h2>
          <div>
          <input
            name="username"
            type="text"
            onChange={this.handleChange}
            value={this.state.username}
            placeholder="Enter username"
            required
          />
          </div>
          <div>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="Enter password"
            required
          />
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Display name"
          />
          <input
            name="location"
            type="text"
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


