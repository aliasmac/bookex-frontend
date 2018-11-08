import React, { Component } from 'react';
import "./App.css";

import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import BookResults from './components/BookResults'
import BookDetails from './components/BookDetails'
import UserProfile from './containers/UserProfile'


class App extends Component {

  state = {
    searchQuery: "",
    bookResults: [],
    selectedBook: null,
    userBooks: []
  }

  getBooks = (query) => {
    console.log(query)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(resp => resp.json())
      .then(books => this.setState({ bookResults: books.items.volumeInfo }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("Hello")
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


  render() {

    console.log(this.state.bookResults)

    return (
      <div className="homepage" >
        {/* <Navbar /> */}
        <SearchBar className="search-bar" handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <UserProfile books={this.state.userBooks} />
        {
          this.state.selectedBook ? 
          <BookDetails
            book={this.state.selectedBook}
            deselectBook={this.deselectBook}
          /> :
          <BookResults
            className="results"
            books={this.state.bookResults}
            selectBook={this.selectBook}
          />
        }
      </div>
    );
  }
}

export default App;
