import React from 'react'

import BookResults from '../components/BookResults'
import BookDetails from '../components/BookDetails'
import PopularBooks from '../components/PopularBooks'
import SignupForm from '../components/SignupForm'

class HomePage extends React.Component {

  render() {

    console.log(this.props.renderSignUp)

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
            this.props.renderSignUp
            ? 
            <SignupForm signup={this.props.signup} />
            :
            this.props.selectedBook
              ? 
              <BookDetails
                  book={this.props.selectedBook}
                  currentlyReading={this.props.currentlyReading}
                  deselectBook={this.props.deselectBook}
                  user={this.props.user}
                  handleWant={this.props.handleWant}
                  handleFavourite={this.props.handleFavourite}
              /> 
              : 
              <PopularBooks 
                  selectBook={this.props.selectBook}
                  user={this.props.user}/>
              }
  
          </div>
        </React.Fragment>   

      )
    
  }

}

export default HomePage