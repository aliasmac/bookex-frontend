import React from 'react'

import BookResults from '../components/BookResults'
import BookDetails from '../components/BookDetails'
import PopularBooks from '../components/PopularBooks'

class HomePage extends React.Component {

    render() {
        return(
        <div className="main-body">
            <div className="pop-books-div">
              <PopularBooks />   
            </div>
        <div className="homepage" >
 
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