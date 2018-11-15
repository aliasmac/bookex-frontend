import React, { Component } from 'react';
import "./App.css";
import {
  Route,
  withRouter,
} from 'react-router-dom';

import UserProfile from './containers/UserProfile'
import HomePage from './containers/HomePage'
import Navbar from './components/Navbar'
import LoanShelf from './components/LoanShelf'
import API from './API'

class App extends Component {

  state = {
    user: null,
    selectedBook: null,
    lastScroll: 0,
    bookResults: [],
    suggestions: true,
    loanedBooks: [],
    renderSignUp: false
  }

  renderSignUp = () => {
    this.setState({renderSignUp: true})
  }

  signup = userObj => {
    API.signup(userObj)
      .then(user => {
        if (user.errmsg) {
          console.log('Invalid signup caught')
        } else {
          this.setState({user: user.user}, 
            () => this.props.history.push('/profile'))
          }
      })
      .catch(err => {
        console.log('Invalid signup caught', err)
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
        console.log('Invalid login caught', err)
        // do something to alert the user
      })
  }

  logout = () => {
    API.logout().then(() => {
      localStorage.removeItem('authorization')
      this.setState({ user: null })
      this.props.history.push('/')
    }).catch(err => console.log('Error logging out', err))
  }

  updateResults = bookResults => {
    this.setState({
      bookResults,
      suggestions: false
    }).catch(err => console.log('Error updating book results', err))
  }

  componentDidMount() {
    console.log(this.state.user)
    console.log("IBDB ONLINE")
    this.getSuggestions()
    this.getLoanedBooks()  
    if (!localStorage.getItem('authorization')) return 
    API.getUser()
      .then(user => {
        console.log("Component did mount:", user)
        this.setState({ user: user.user })
      })
      .catch(err => {
        console.log('Error in getting user', err)
        this.props.history.push('/')
      })

  }

  getSuggestions() {
    API.getSuggestions()
      .then(books => {
        this.updateResults(books)
        this.setState({suggestions: true})
      }).catch(err => 
        console.log('Error in getting suggestions', err))
  }

  currentlyReading = book => {
    let user = {...this.state.user, currently_reading: book}
    this.setState({ user }, () => 
      API.update(this.state.user) 
          .then(user => this.setState({ user: user.user }))
          .catch(err => 
            console.log('error in setting currently reading', err))
    )
  }

  handleWant = book => {
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

  handleLoaned = book => {
    API.loan(book, this.state.user._id) 
      // .then(loan => this.setState({ userLoanedBooks: [...this.state.userLoanedBooks], loan }))
  }

  getLoanedBooks = () => {
    API.getAllLoanedBooks()
      .then(loans => this.setState({ loanedBooks: loans }))
      .catch(err => console.log('Error caught in get loaned books', err))
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
          .catch(err => console.log('Error in removing book from list', err))
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
    this.setState({ 
      selectedBook,
      lastScroll: document.documentElement.scrollTop,
      renderSignUp: false
    }, this.scrollUp) 
  }


  deselectBook = () => {
    this.setState({ selectedBook: null })
    this.scrollDown()
  }  

  scrollUp = () => {
   let currentScroll = document.documentElement.scrollTop
    if (currentScroll > 0) {
      window.requestAnimationFrame(this.scrollUp);
      window.scrollTo(0, currentScroll - (currentScroll / 5))
    }
  }

  scrollDown = () => {
    let currentScroll = document.documentElement.scrollTop
    if (currentScroll < this.state.lastScroll) {
      window.requestAnimationFrame(this.scrollDown);
      window.scrollTo(0, 
        currentScroll + (this.state.lastScroll / 20  ))
    }
  }


  render() {

    console.log("USER:", this.state.user)
    console.log("LOANED:", this.state.loanedBooks)

    const { user, selectedBook, bookResults, loanedBooks, suggestions, renderSignUp, signup }
     = this.state

    return (
  
      <div >
        <Navbar user={user} login={this.login} logout={this.logout}
          submitSearch={this.submitSearch} 
          renderSignUp={this.renderSignUp}
        />
        
        <div className='main-container'>
          {user &&
            <Route exact path='/profile' render={(routerProps) => 
              <UserProfile {...routerProps}
              user={user}
              currentlyReading={this.currentlyReading}
              handleWant={this.handleWant}
              handleFavourite={this.handleFavourite}
              selectBook={this.selectBook}
              selectedBook={selectedBook}
              deselectBook={this.deselectBook}
              handleLoaned={this.handleLoaned}
              /> }
            />
          }
          <Route
              exact path='/loanshelf'
              render={(routerProps) => 
                <LoanShelf {...routerProps}
                  loanedBooks={loanedBooks}
                  selectBook={this.selectBook}
                  selectedBook={selectedBook}
                  handleWant={this.handleWant}
                  handleFavourite={this.handleFavourite}
                  user={user}
                />
              }
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
                renderSignUp={renderSignUp}
                signup={this.signup}
                suggestions={suggestions}
                updateResults={this.updateResults}
                user={user}
              /> }
            />
            
        </div>
      </div>
      
    );
  }
}

export default withRouter(App)





