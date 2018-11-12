import React, { Component } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
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
    // wishlist:
    userBooks: [],
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
        this.login(user)
        // this.props.history.push('/profile')
      })
      .catch(error => this.props.history.push('/signup'))
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

  // BOOK DETAILS 
  selectBook = selectedBook => {
    this.setState({ selectedBook }) 
  }

  selectBookTwo = selectedBook => {
      this.props.isUser ? this.setState({ selectedBook }) : alert("Please Signin to add to your wishlist") 
    }
   
  selectBookThree = selectedBook => {
  this.props.isUser ? this.setState({ selectedBook }) : alert("Please Signin to like a book!") 
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
          <Route 
            exact path='/'
            render={(routerProps) => 
              <HomePage {...routerProps}  
                // STATE:
                selectedBook={this.state.selectedBook}
                // FUNCTIONS TO ADD/REMOVE STATE:
                selectBook={this.selectBook}
                selectBookTwo={this.selectBookTwo}
                selectBookThree={this.selectBookThree}
                deselectBook={this.deselectBook}
                //////////////////////////////////
                addBookToUser={this.addBookToUser}
                
                wishlist={this.state.userBooks}
                removeBookFromUser={this.removeBookFromUser}
                isUser={user}
              />
            }
          />  
          <Switch>
          <Route path='/profile' render={(routerProps) => 
            <UserProfile {...routerProps}
            wishlist={this.state.userBooks} 
            favorites={this.state.favorites}
            finishedReading={this.state.finishedReading}
            currentlyReading={this.state.currentlyReading}
            removeBookFromUser={this.removeBookFromUser}
            selectedBook={this.state.selectedBook}
            selectBook={this.selectBook}
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
             
          
        </div>
      
      
        
        
      
    );
  }
}

export default withRouter(App)





