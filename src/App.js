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
    username: null,

    selectedBook: null,
    // wishlist:
    userBooks: [],
    
  }

  // USER LOGIN/LOGOUT
  login = (user) => {
    console.log("LOGIN:", user)
    this.props.history.push('/profile')
    this.setState({ username: user.user })
  }

  logout = () => {
    localStorage.removeItem('authorization')
    this.setState({ username: null })
    this.props.history.push('/login')
  }

  componentDidMount() {
    console.log("IBDB ONLINE")
    if (!localStorage.getItem('authorization')) return 
    API.validate()
      .then(user => {
        console.log("Component did mount", user)
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
      
      
        <div >
          <Navbar username={username} />
          <Header username={username} logout={this.logout} />   
          <Switch>
          <Route path='/profile' render={(routerProps) => 
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
            path='/home'
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





