import React, { Component } from 'react';
import "./App.css";
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import UserProfile from './containers/UserProfile'
import HomePage from './containers/HomePage'
import Navbar from './components/Navbar'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import API from './API';

class App extends Component {

  state = {
    user: null,
    selectedBook: null
  }

  // USER LOGIN/LOGOUT
  login = (user) => {
    console.log("LOGIN:", user)
    this.props.history.push('/profile')
    this.setState({ user: user.user })
  }

  logout = () => {
    localStorage.removeItem('authorization')
    this.setState({ user: null })
    this.props.history.push('/')
  }

  componentDidMount() {
    console.log("IBDB ONLINE")
    if (!localStorage.getItem('authorization')) return 
    API.validate()
      .then(user => {
        console.log("Component did mount:", user)
        this.setState({ user: user.user })
      })
      .catch(error => this.props.history.push('/signup'))
  }

  addBookToList = (book, list) => { 
    const newList = [...this.state.user[list], book]
    this.setState( {
      user: { ...this.state.user, [list]: newList }
    }, () => API.update(this.state.user)
        .then(user => this.setState({ user: user.user }))
    )
  }

  removeBookFromList = (book, list) => { 
    let newList = [...this.state.user[list]]
    newList = newList.filter(x => book.ISBN_13 !== x.ISBN_13)
    this.deselectBook()
    this.setState({
      user: { ...this.state.user, [list]: newList }
    }, () => API.update(this.state.user)
          .then(user => this.setState({ user: user.user }))
    )
  } 

  // BOOK DETAILS 
  selectBook = selectedBook => {
    this.setState({ selectedBook }) 
  }

  deselectBook = () => {
    this.setState({ selectedBook: null })
  }  

  render() {

    console.log("BOOKS RESULTS", this.state.bookResults)
    console.log("USER:", this.state.user)

    const { user, selectedBook } = this.state

    return (
    
        <div >
          <Navbar user={user} />
          <Header user={user} logout={this.logout} />  
          <Switch>
          <Route path='/profile' render={(routerProps) => 
            <UserProfile {...routerProps}
            user={user}
            removeBookFromList={this.removeBookFromList}
            selectedBook={selectedBook}
            selectBook={this.selectBook}
            deselectBook={this.deselectBook}
            addBookToList={this.addBookToList}
            /> }
          />
          <Route
            path='/signup'
            render={(routerProps) =>  <SignupForm {...routerProps} login={this.login} /> }
          />
          <Route
            path='/login'
            render={(routerProps) =>  <LoginForm {...routerProps} login={this.login} /> }
          />
          </Switch>
          <Route
            path='/'
            render={(routerProps) =>
              <HomePage {...routerProps}
                // STATE:
                selectedBook={this.state.selectedBook}
                // FUNCTIONS TO ADD/REMOVE STATE:
                selectBook={this.selectBook}
                deselectBook={this.deselectBook}
                addBookToList={this.addBookToList}
                removeBookFromList={this.removeBookFromList}
                user={user}
              />
          }
        />  
             
        </div>
      
    );
  }
}

export default withRouter(App)





