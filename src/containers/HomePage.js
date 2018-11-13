import React from 'react'

import SearchBar from '../components/SearchBar'
import BookResults from '../components/BookResults'
import BookDetails from '../components/BookDetails'
import PopularBooks from '../components/PopularBooks'

class HomePage extends React.Component {

    state = {
      searchQuery: "",     
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Search
    getBooks = (query) => {
        fetch(`https://still-plateau-95838.herokuapp.com/books?q=${query}`)
          .then(resp => resp.json())
          .then(books => {
            this.props.deselectBook()
            this.props.updateResults(books)
          })
          .catch(err => err)
      }

    submitSearch = query => {
        this.getBooks(query)
    }

    render() {
        return(
        <div className="main-body">
            <div className="pop-books-div">
              <PopularBooks />   
            </div>
        <div className="homepage" >
            <SearchBar className="search-bar" 
              submitSearch={this.submitSearch} />   
            {
            this.props.selectedBook ? 
            <BookDetails
                book={this.props.selectedBook}
                currentlyReading={this.props.currentlyReading}
                deselectBook={this.props.deselectBook}
                user={this.props.user}
                handleWant={this.props.handleWant}
                handleFavourite={this.props.handleFavourite}
            /> : 
            <BookResults
                className="results"
                books={this.props.bookResults}
                selectBook={this.props.selectBook}
                handleWant={this.props.handleWant}
                handleFavourite={this.props.handleFavourite}
                user={this.props.user}
            /> 
            }

        </div>
        </div>    

        )
      
    }

}

export default HomePage