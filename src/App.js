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
import API from './API'

class App extends Component {

  state = {
    user: null,
    selectedBook: null,
    bookResults: []
  }

  signup = (username, password) => {
    API.signup(username, password)
      .then(user => {
        if (user.errmsg) {
          console.log('Invalid signup caught')
        } else {
          this.setState({user: user.user})
          }
      })
      .catch(err => {
        console.log('Invalid signup caught')
        this.props.history.push('/signup') 
      })
  }

  login = (username, password) => {
    API.login(username, password)
      .then(user => {
        console.log("LOGIN:", user)
        this.setState({ user: user.user })
        this.props.history.push('/profile')
      })
      .catch(err => {
        console.log('Invalid login caught')
        this.props.history.push('/login')
      })
  }

  logout = () => {
    API.logout().then(() => {
      localStorage.removeItem('authorization')
      this.setState({ user: null })
      this.props.history.push('/')
    })
  }

  updateResults = bookResults => {
    this.setState({bookResults})
  }

  updateResults = bookResults => {
    this.setState({bookResults})
  }

  componentDidMount() {
    console.log("IBDB ONLINE")
    if (!localStorage.getItem('authorization')) return 
    API.getUser()
      .then(user => {
        console.log("Component did mount:", user)
        this.setState({ user: user.user })
      })
      .catch(error => this.props.history.push('/'))
  }

  currentlyReading = book => {
    let user = {...this.state.user, currently_reading: book}
    this.setState({ user }, () => 
      API.update(this.state.user) 
          .then(user => this.setState({ user: user.user }))
    )
  }

  handleWant = book => {
    console.log(book)
    this.state.user.wishlist.find(
      x => parseInt(x.ISBN_13) === parseInt(book.ISBN_13)
    )
    ?
    this.removeBookFromList(book, 'wishlist')
    :
    this.addBookToList(book, 'wishlist')
  }

  handleFavourite = book => {
    this.state.user.favourite_books.find(
      x => parseInt(x.ISBN_13) === parseInt(book.ISBN_13)
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
        .catch(err => console.log('Error in adding book to list', err))
    )
  }

  removeBookFromList = (book, list) => { 
    let newList = [...this.state.user[list]]
    newList = newList.filter(x => 
      parseInt(x.ISBN_13) !== parseInt(book.ISBN_13))
    this.setState({
      user: { ...this.state.user, [list]: newList },
      selectedBook: false
    }, () => API.update(this.state.user)
          .then(user => this.setState({ user: user.user }))
    )
  } 

  // Search
  getBooks = query => {
    fetch(`https://still-plateau-95838.herokuapp.com/books?q=${query}`)
      .then(resp => resp.json())
      .then(books => {
        this.deselectBook()
        this.updateResults(books)
        this.props.history.push('/')
      })
      .catch(err => err)
  }

  submitSearch = query => {
    this.getBooks(query)
  }

  // BOOK DETAILS 
  selectBook = selectedBook => {
    this.setState({ selectedBook }) 
  }

  deselectBook = () => {
    this.setState({ selectedBook: null })
  }  

  render() {


    console.log("USER:", this.state.user)

    const { user, selectedBook, bookResults } = this.state

    return (
    

      <div >
        <Navbar user={user} login={this.login} logout={this.logout}
          submitSearch={this.submitSearch} />
        
        <div className='main-container'>
        <Switch>
          {user &&
            <Route path='/profile' render={(routerProps) => 
              <UserProfile {...routerProps}
              user={user}
              currentlyReading={this.currentlyReading}
              handleWant={this.handleWant}
              handleFavourite={this.handleFavourite}
              selectBook={this.selectBook}
              selectedBook={selectedBook}
              deselectBook={this.deselectBook}
              /> }
            />
          }

          <Route
            path='/signup'
            render={(routerProps) =>  <SignupForm {...routerProps} signup={this.signup} /> }
          />

          <Route
            path='/'
            render={(routerProps) =>
              <HomePage {...routerProps}
                bookResults={bookResults}

                currentlyReading={this.currentlyReading}

                selectedBook={selectedBook}
                selectBook={this.selectBook}
                deselectBook={this.deselectBook}
                handleWant={this.handleWant}
                handleFavourite={this.handleFavourite}
                updateResults={this.updateResults}
                user={user}
              /> }
            />
        </Switch>

        </div>
      </div>
      
    );
  }
}

export default withRouter(App)





