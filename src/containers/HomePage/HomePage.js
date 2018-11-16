import React from 'react'

import BookResults from '../../components/BookResults/BookResults'
import BookDetails from '../../components/BookDetails/BookDetails'
import PopularBooks from '../../components/PopularBooks/PopularBooks'
import SignupForm from '../../components/SignupForm/SignupForm'

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
            this.props.renderSignUp
            ? 
            <SignupForm setUser={this.props.setUser} history={this.props.history}
                        />
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
                  handleLoaned={this.props.handleLoaned}
                  loanedBooks={this.props.loanedBooks}
                  loanObject={this.props.loanObject}
              /> : 
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