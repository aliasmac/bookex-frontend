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



    render() {
        return(
        <div className="homepage" >
            <h1>Search for the bestest books in the world</h1>
            <SearchBar className="search-bar" handleChange={this.handleChange} handleSubmit={this.handleSubmit} />   
            {
            this.props.selectedBook ? 
            <BookDetails
                book={this.props.selectedBook}
                deselectBook={this.props.deselectBook}
                wishlist={this.props.wishlist}
                addBookToUser={this.props.addBookToUser}
                removeBookFromUser={this.props.removeBookFromUser}
                isUser={this.props.isUser}
            /> :
            <BookResults
                className="results"
                books={this.state.bookResults}
                selectBook={this.props.selectBook}
                selectBookTwo={this.props.selectBookTwo}
                selectBookThree={this.props.selectBookThree}
            /> 
            // <PopularBooks />
            }

        </div>

        )
      
    }

}

export default HomePage