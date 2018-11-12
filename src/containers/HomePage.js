import React from 'react'

import SearchBar from '../components/SearchBar'
import BookResults from '../components/BookResults'
import BookDetails from '../components/BookDetails'
import PopularBooks from '../components/PopularBooks'

class HomePage extends React.Component {

    constructor() {
        super()
        this.state = {
            searchQuery: "",
            bookResults: [],    
            popularBooks: [],
        }
    }

    // LIVE FETCHING OF POPULAR BOOKS
    componentDidMount() { 
        console.log("FETCHING")
        this.getPopularBooks()
        this.interval = setInterval(this.getPopularBooks(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getPopularBooks = () => {
        fetch('https://still-plateau-95838.herokuapp.com/books/popular')
            .then(resp => resp.json())
            .then(books => this.setState({  popularBooks: books }))
            .catch(err => err)
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
        <div className="main-body">
            <div className="pop-books-div">
              <PopularBooks popularBooks={this.state.popularBooks} />   
            </div>
        <div className="homepage" >
            <SearchBar className="search-bar" 
              submitSearch={this.submitSearch} />   
            {
            this.props.selectedBook ? 
            <BookDetails
                book={this.props.selectedBook}
                deselectBook={this.props.deselectBook}
                user={this.props.user}
                handleWant={this.props.handleWant}
                handleFavourite={this.props.handleFavourite}
            /> :
            <BookResults
                className="results"
                books={this.state.bookResults}
                selectBook={this.props.selectBook}
                handleWant={this.props.handleWant}
                handleFavourite={this.props.handleFavourite}
                user={this.props.user}
            /> 
            // <PopularBooks />
            }

        </div>
        </div>    

        )
      
    }

}

export default HomePage