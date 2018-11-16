import React from 'react'
import BookCard from '../BookCard/BookCard'


const onLoanBooks = ({loanedBooks, user, currentlyReading, selectBook, deselectBook, selectedBook, handleFavourite}) => {

    return (      
      
      <div>
        <h2 style={{"marginLeft": "50px"}}>Books available to borrow</h2>
        <div className='loan-shelf card'>
            {   loanedBooks &&
                loanedBooks.map((loan, idx) => <BookCard 
                    key={idx}
                    book={loan.book}
                    deselectBook={deselectBook}
                    currentlyReading={currentlyReading}
                    selectBook={selectBook}
                    selectedBook={selectedBook}
                    loanObject={loan}
                    handleRemove={null}
                    user={user}
                    handleWant={null}
                    handleFavourite={handleFavourite}
                    loanShelf
                />)
            }
            
        </div>
      </div>
    )

}

export default onLoanBooks