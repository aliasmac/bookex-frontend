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
// import Header from './components/Header'
import API from './API';

class App extends Component {

  state = {
    user: null,
    selectedBook: null,
    bookResults: []
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

  updateResults = bookResults => {
    this.setState({bookResults})
  }

  componentDidMount() {
    console.log("IBDB ONLINE")
    if (!localStorage.getItem('authorization')) return 
    API.validate()
      .then(user => {
        console.log("Component did mount:", user)
        this.setState({ user: user.user })
      })
      .catch(error => this.props.history.push('/'))

  }

  handleWant = book => {
    console.log(book)
    this.state.user.wishlist.some(
      x => x.ISBN_13 == book.ISBN_13
    )
    ?
    this.removeBookFromList(book, 'wishlist')
    :
    this.addBookToList(book, 'wishlist')
  }

  handleFavourite = book => {
    this.state.user.favourite_books.some(
      x => x.ISBN_13 == book.ISBN_13
    )
    ?
    this.removeBookFromList(book, 'favourite_books')
    :
    this.addBookToList(book, 'favourite_books')
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
    newList = newList.filter(x => book.ISBN_13 != x.ISBN_13)
    this.setState({
      user: { ...this.state.user, [list]: newList },
      selectedBook: false
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

    const { user, selectedBook, bookResults } = this.state

    return (
    
        <div >
          <Navbar user={user} logout={this.logout}/>
          <div class='main-content'>
          <Switch>
            {user &&
          <Route path='/profile' render={(routerProps) => 
            <UserProfile {...routerProps}
            user={user}
            handleWant={this.handleWant}
            handleFavourite={this.handleFavourite}
            selectBook={this.selectBook}
            selectedBook={selectedBook}
            deselectBook={this.deselectBook}
            historyProps={this.props.history}
            /> }
          />
            }
          <Route
            path='/signup'
            render={(routerProps) =>  <SignupForm {...routerProps} login={this.login} /> }
          />
          <Route
            path='/login'
            render={(routerProps) =>  <LoginForm {...routerProps} login={this.login} /> }
          />

          <Route
            path='/'
            render={(routerProps) =>
              <HomePage {...routerProps}
                bookResults={bookResults}
                selectedBook={selectedBook}
                selectBook={this.selectBook}
                deselectBook={this.deselectBook}
                handleWant={this.handleWant}
                handleFavourite={this.handleFavourite}
                updateResults={this.updateResults}
                user={user}
              />
            }
          /> 

          </Switch>

         </div>
        </div>
      
    );
  }
}

export default withRouter(App)





