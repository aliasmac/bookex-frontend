import React, { Component } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';


import UserProfile from './containers/UserProfile'
import HomePage from './containers/HomePage'
import Navbar from './components/Navbar'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import API from './API';

class App extends Component {

  state = {
    username: null,

    selectedBook: null,
    // wishlist:
    userBooks: [],
    
  }

  // USER LOGIN/LOGOUT
  login = (user) => {
    console.log("LOGIN:", user)
    this.setState({ username: user.user.username })
    // this.props.history.push('/profile')
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({ username: null })
    // this.props.history.push('/users/login')
  }

  componentDidMount() {
    console.log("IBDB ONLINE")
    if (!localStorage.getItem('token')) return
    API.validate()
      .then(user => {
        this.login(user)
        this.props.history.push('/login')
      })
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

  


  // SHOW BOOK
  selectBook = selectedBook => {
    this.setState({ selectedBook })
  }

  deselectBook = () => {
    this.setState({ selectedBook: null })
  }  


  render() {

    console.log("BOOKS RESULTS", this.state.bookResults)
    console.log("USERNAME:", this.state.username)

    const { username } = this.state

    return (
      
      <Router>
        <div >
          <Navbar />
          <Header username={username} logout={this.logout} />
                    
          <Route exact path='/profile' render={(routerProps) => 
            <UserProfile {...routerProps}
            userBooks={this.state.userBooks} 
            favorites={this.state.favorites}
            finishedReading={this.state.finishedReading}
            currentlyReading={this.state.currentlyReading}
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
            exact path='/login'
            render={(routerProps) =>  <SignupForm {...routerProps} login={this.login} /> }
          />
          
          
          
        </div>
      </Router>
      
        
        
      
    );
  }
}

export default App;





