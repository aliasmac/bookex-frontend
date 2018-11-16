import React from 'react'
import BookCard from '../../components/BookCard/BookCard'

import './LoanShelf.css'

class LoanShelf extends React.Component {

    render() {

      const { loanedBooks, selectBook, selectedBook, user, deselectBook, handleFavourite, handleWant} = this.props

        return (
          <div className="left-container">
            <h2 style={{ "marginLeft": "50px" }}>Books available to borrow</h2>
            <div className='loan-shelf card'>
              {loanedBooks &&
                loanedBooks.map((loan, idx) => <BookCard
                  key={idx}
                  book={loan.book}
                  deselectBook={deselectBook}
                  selectBook={selectBook}
                  selectedBook={selectedBook}
                  loanObject={loan}
                  user={user}
                  handleWant={handleWant}
                  handleFavourite={handleFavourite}
                  loanShelf
                />)
              }
            </div> 
          </div>   
        )
    }
}

export default LoanShelf