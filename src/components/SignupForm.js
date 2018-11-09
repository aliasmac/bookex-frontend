import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
    name: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.onSubmit(this.state)
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
          placeholder="Enter name"
        />
        <TextField
          name="password"
          type="password"
          onChange={this.handleChange}
          value={this.state.password}
          placeholder="Enter password"
        />
        {/* <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        /> */}
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);