import React, { Component } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import UserProfile from './containers/UserProfile'
import HomePage from './containers/HomePage'
import Navbar from './components/Navbar'
import SignupForm from './components/SignupForm'


class App extends Component {

  state = {
    searchQuery: "",
    bookResults: [],
    selectedBook: null,
    userBooks: []
  }

  getBooks = (query) => {
    fetch(`https://still-plateau-95838.herokuapp.com/books?q=${query}`)
      .then(resp => resp.json())
      .then(books => this.setState({ bookResults: books }))
  }

  // Search
  handleSubmit = (e) => {
    e.preventDefault()
    this.getBooks(this.state.searchQuery)
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ searchQuery: e.target.value })
  }

  selectBook = selectedBook => {
    this.setState({ selectedBook })
  }

  deselectBook = () => {
    this.setState({ selectedBook: null })
  }

  // USER PROFILE
  addBookToUser = (book) => {
    this.setState({ userBooks: [...this.state.userBooks, book] })
  }

  // USER SIGNUP
  addUser = (user) => {
    
  }

  render() {

    console.log("BOOKS RESULTS", this.state.bookResults)

    return (
      
      <Router>
        <div >
          <Navbar />
          <Route exact path='/profile' render={(routerProps) => 
            <UserProfile {...routerProps} books={this.state.userBooks} /> }
          />
          <Route 
            exact path='/home'
            render={(routerProps) => 
              <HomePage {...routerProps}  
                selectedBook={this.state.selectedBook}
                bookResults={this.state.bookResults}
                selectBook={this.selectBook}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} 
              />
            }
          />
          <Route
            exact path='/signup'
            render={(routerProps) => 
              <SignupForm {...routerProps}

              />
            }
          />
        </div>
      </Router>
        
        
      
    );
  }
}

export default App;





