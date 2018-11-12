import React from 'react'

import SearchBar from '../components/SearchBar'
import BookResults from '../components/BookResults'
import BookDetails from '../components/BookDetails'

class HomePage extends React.Component {

    constructor() {
        super()
        this.state = {
            searchQuery: "",
            bookResults: [],    
        }
    }

    // Search
    getBooks = (query) => {
        fetch(`https://still-plateau-95838.herokuapp.com/books?q=${query}`)
          .then(resp => resp.json())
          .then(books => this.setState({ bookResults: books }))
      }

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


    render() {
        return(
        <div className="homepage" >
            <h1>Search for the bestest book in the world</h1>
            <SearchBar className="search-bar" handleChange={this.handleChange} handleSubmit={this.handleSubmit} />   
            {
            this.state.selectedBook ? 
            <BookDetails
                book={this.state.selectedBook}
                deselectBook={this.deselectBook}
                userBooks={this.props.userBooks}
                addBookToUser={this.props.addBookToUser}
                removeBookFromUser={this.props.removeBookFromUser}
            /> :
            <BookResults
                className="results"
                books={this.state.bookResults}
                selectBook={this.selectBook}
            /> 
            // <PopularBooks />
            }

        </div>

        )
      
    }

}

export default HomePage