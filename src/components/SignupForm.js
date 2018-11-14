import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import API from '../API'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {
  
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { username, password } = this.state
    this.props.signup(username, password)
    this.setState({
      username: "",
      password: ""
    })    
  }


  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <h2>Signup</h2>
        <div>
        <TextField
          name="username"
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder="Enter username"
        />
        </div>
        <div>
        <TextField
          name="password"
          type="password"
          onChange={this.handleChange}
          value={this.state.password}
          placeholder="Enter password"
        />
        </div>
        {/* <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        /> */}
        <Button onClick={this.handleSubmit} variant='contained' color='primary'>
          SUBMIT
        </Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);


