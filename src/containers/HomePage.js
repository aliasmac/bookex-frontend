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
          .then(books => {
            this.props.deselectBook()
            this.setState({ bookResults: books })
          })
          .catch(err => err)
      }

    submitSearch = query => {
        this.getBooks(query)
    }

    render() {
        return(
        <div className="homepage" >
            <SearchBar className="search-bar" 
              submitSearch={this.submitSearch} />   
            {
            this.props.selectedBook ? 
            <BookDetails
                book={this.props.selectedBook}
                deselectBook={this.props.deselectBook}
                user={this.props.user}
                addBookToList={this.props.addBookToList}
                removeBookFromList={this.props.removeBookFromList}
            /> :
            <BookResults
                className="results"
                books={this.state.bookResults}
                selectBook={this.props.selectBook}
                addBookToList={this.props.addBookToList}
                removeBookFromList={this.props.removeBookFromList}
            /> 
            // <PopularBooks />
            }

        </div>

        )
      
    }

}

export default HomePage