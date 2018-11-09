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
    username: null,

    
    selectedBook: null,
    userBooks: [],
    finishedReading: [],
    currentlyReading: [],
    ProfileBox: []

  }

  // Reading List
  addBookToUser = (book) => {
    this.setState({ userBooks: [...this.state.userBooks, book] })
  }

  removeBookFromUser = (title) => { 
    const userBooks = [...this.state.userBooks]
    const updatedUserBooks = userBooks.filter(book => book.title !== title)
    this.setState({
      userBooks: updatedUserBooks
    })
  }

  // Finished Reading List
  addToFinishReading = () => {

  }

  removeToFinishReading = () => {

  }

  // Currently Reading
  addToCurrentlyReading = () => {

  }

  removeToCurrentlyReading = () => {

  }


  // SHOW BOOK
  selectBook = selectedBook => {
    this.setState({ selectedBook })
  }

  deselectBook = () => {
    this.setState({ selectedBook: null })
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
            <UserProfile {...routerProps}
            userBooks={this.state.userBooks} 
            removeBookFromUser={this.removeBookFromUser}
            selectedBook={this.state.selectedBook}
            selectBook={this.selectBook}
            /> }
          />
          <Route 
            exact path='/home'
            render={(routerProps) => 
              <HomePage {...routerProps}  
                selectedBook={this.state.selectedBook}
                selectBook={this.selectBook}
                addBookToUser={this.addBookToUser}
                deselectBook={this.deselectBook}
                userBooks={this.state.userBooks}
                removeBookFromUser={this.removeBookFromUser}
              />
            }
          />
          <Route
            exact path='/signup'
            render={(routerProps) =>  <SignupForm {...routerProps} /> }
          />
          <div>
            <h1>Welcome to the International Book Database (IBDB)</h1>
            <div>
              <img src="https://media.giphy.com/media/3o85xBwvWcj1Z11Gda/giphy.gif" />
            </div>
         </div>
        </div>
      </Router>
      
        
        
      
    );
  }
}

export default App;





