import React from 'react'

import OnLoanBooks from '../components/OnLoanBooks'
import BookDetails from '../components/BookDetails'

import './LoanShelf.css'

class LoanShelf extends React.Component {


    render() {

        const {loanedBooks, user, selectBook, selectedBook, handleRemove, handleWant, handleFavourite, handleLoaned, setLoanObject, removeLoaned, loanObject} = this.props

        return (
            <React.Fragment>
                <div className="left-container loan-shelf">
                {console.log("HELLO FROM LOAN SHELF")}
                    <OnLoanBooks
                        loanedBooks={loanedBooks}
                        selectedBook={selectedBook}
                        selectBook={selectBook}
                        setLoanObject={setLoanObject}
                    />
                </div>
                <div className='right-container loan-shelf'>
                {selectedBook && 
                  <BookDetails
                      book={selectedBook}
                    //   deselectBook={deselectBook}
                      user={user}
                    //   currentlyReading={currentlyReading}
                      handleWant={handleWant}
                      handleFavourite={handleFavourite}
                      handleLoaned={handleLoaned}
                      loanShelf
                      loanObject={loanObject}
                      removeLoaned={removeLoaned}
                        loanedBooks={loanedBooks}
                  />}
                </div>      
            </React.Fragment>

        )
    }
}

export default LoanShelf