import React from 'react'

import SearchBar from '../components/SearchBar'
import BookResults from '../components/BookResults'
import BookDetails from '../components/BookDetails'

class HomePage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return(
        <div className="homepage" >
            <h1>Search for the bestest book in the world</h1>
            <SearchBar className="search-bar" handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />   
            {
            this.props.selectedBook ? 
            <BookDetails
                book={this.props.selectedBook}
                addBookToUser={this.props.addBookToUser}
                deselectBook={this.props.deselectBook}
                userBooks={this.props.userBooks}
                removeBookFromUser={this.props.removeBookFromUser}
            /> :
            <BookResults
                className="results"
                books={this.props.bookResults}
                selectBook={this.props.selectBook}
            />
            }
        </div>

        )
        
        
    }


}

export default HomePage