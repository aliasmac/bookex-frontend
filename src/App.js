import React, { Component } from 'react';
import "./App.css";
import {
  Route,
  withRouter,
} from 'react-router-dom';

import UserProfile from './containers/UserProfile'
import HomePage from './containers/HomePage'
import LoanShelf from './containers/LoanShelf'

import Navbar from './components/Navbar'

import API from './API'

class App extends Component {

  state = {
    user: null,
    selectedBook: null,
    lastScroll: 0,
    bookResults: [],
    loanedBooks: [],
    loanObj: null,
    pauseScroll: false,
    searchQuery: "",
    suggestions: true,
    resultsOffset: 0,
    renderSignUp: false,
    userTaken: ""
  }

  renderSignUp = () => {
    this.setState({renderSignUp: true})
  }

  setUser = user => {
    this.setState({user})
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
        this.setState({loginError: 'Invalid login'})
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
    })
  }

  componentDidMount() {
    console.log(this.state.user)
    this.getSuggestions()
    this.getLoanedBooks()  
    if (!localStorage.getItem('authorization')) return 
    API.getUser()
      .then(user => {
        this.setState({ user: user.user })
      })
      .catch(err => {
        console.log('Error in getting user', err)
        this.props.history.push('/')
      })
    window.onscroll = this.scrollWatcher
  }

  scrollWatcher = () => {
    if (this.state.suggestions || this.state.pauseScroll || 
      this.props.match.url !== '/')
      { return }
    const doc = document.documentElement
    if ((doc.clientHeight + doc.scrollTop) > (doc.scrollHeight - 500)) {
      this.setState({pauseScroll: true})
      this.getMoreBooks()
    }
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

  setLoanObject = (loanObject) => {
    return this.state.loanedBooks.find(loanObject)
  } 

  removeLoaned = (loan) => {
    // console.log("LOAN OBJECT ID:", loane.loans_id)
    console.log("LOAN OBJECT LIST:", this.state.loanedBooks)
    let newLoanList = [...this.state.loanedBooks.loans]
    newLoanList = newLoanList.filter(x => x._id !== loan._id)
    this.setState({
      loanedBooks: newLoanList
    })
    API.deleteFromLoans(loan._id)
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
      user: { ...this.state.user, [list]: newList }
    }, () => API.update(this.state.user)
          .then(user => this.setState({ user: user.user }))
          .catch(err => console.log('Error in removing book from list', err))
    )
  } 

  getBooks = query => {
    fetch(`https://still-plateau-95838.herokuapp.com/books?q=${query}`)
      .then(resp => resp.json())
      .then(books => {
        this.updateResults(books)
        this.setState({ 
          lastScroll: 0,
          searchQuery: query,
          resultsOffset: 40
        }, this.scrollUp)
        this.props.history.push('/')
      })
      .catch(err => err)
  }

  getMoreBooks = () => {
    const {resultsOffset} = this.state
    fetch(`https://still-plateau-95838.herokuapp.com/books?q=${this.state.searchQuery}&start=${resultsOffset}`)
      .then(resp => resp.json())
      .then(books => {
        let moreBooks = [...this.state.bookResults, ...books]
        this.updateResults(moreBooks)
        this.setState({ 
          resultsOffset: resultsOffset + 40,
          pauseScroll: true 
        }, () => setTimeout( () => 
            this.setState({pauseScroll: false}),
            1500
        ))
      })
      .catch(err => err)
  }

  submitSearch = query => {
    this.getBooks(query)
  }

  // BOOK DETAILS 
  selectBook = (selectedBook, loanObj) => {
    console.log("SELECTBOOK IN APP:", loanObj)
    if (loanObj) {
      this.setState({ 
        selectedBook,
        loanObj,
        lastScroll: document.documentElement.scrollTop,
      renderSignUp: false
    }, this.scrollUp) 
    } else {
      this.setState({ selectedBook, 
      lastScroll: document.documentElement.scrollTop,
      renderSignUp: false
    }, this.scrollUp) 
    }
   
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

    const { user, selectedBook, bookResults, loanedBooks, suggestions, renderSignUp, loginError}
     = this.state

    return (
  
      <div >
        <Navbar user={user} login={this.login} logout={this.logout}
          submitSearch={this.submitSearch} 
          renderSignUp={this.renderSignUp}
          loginError={loginError}
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
                  removeLoaned={this.removeLoaned}
                  findLoanObject={this.findLoanObject}
                  loanObject={this.state.loanObj}
                />
              }
            />
          <Route
            exact path='/'
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
                setUser={this.setUser}
                suggestions={suggestions}
                updateResults={this.updateResults}
                user={user}
                handleLoaned={this.handleLoaned}
              /> }
            />
            
        </div>
      </div>
      
    );
  }
}

export default withRouter(App)





