import React from 'react'

import BookResults from '../components/BookResults'
import BookDetails from '../components/BookDetails'
import PopularBooks from '../components/PopularBooks'

class HomePage extends React.Component {

    render() {
        return(
        <React.Fragment>
          <div className="left-container">
              <BookResults
                className="results"
                books={this.props.bookResults}
                selectBook={this.props.selectBook}
                handleWant={this.props.handleWant}
                handleFavourite={this.props.handleFavourite}
                user={this.props.user}
              /> 
          </div>
          <div className='right-container'>
              {
              this.props.selectedBook ? 
              <BookDetails
                  book={this.props.selectedBook}
                  currentlyReading={this.props.currentlyReading}
                  deselectBook={this.props.deselectBook}
                  user={this.props.user}
                  handleWant={this.props.handleWant}
                  handleFavourite={this.props.handleFavourite}
                  handleLoaned={this.props.handleLoaned}
              /> : 
              <div className="pop-books-div">
                <PopularBooks />
              </div>
              }
          </div>
        </React.Fragment>   

        )
      
    }

}

export default HomePage