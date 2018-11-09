// import React from 'react'

// class SignupForm extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             username: '',
//             password: ''
//           };

//     }

//     handlechange = (e) => {
//         this.setState({
//             [e.target.name]: [e.target.value]
//         })
//     }

//     handleSubmit = () => {

//     }

//     render() {
//         return (
//             <form>
//                 <div>
//                     <label>Name</label>
//                     <input
//                         name="name"
//                         type="text"
//                         onChange={this.handleChange}
//                         value={this.state.username}
//                     />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input
//                         name="password"
//                         type="password"
//                         onChange={this.handleChange}
//                         value={this.state.password}
//                     />
//                 </div>
//                 <button>Sign Up</button>
//             </form>
//         )
//     }

// }

// export default SignupForm 


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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);