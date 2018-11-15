import React from 'react'
import BookCard from './BookCard'


const onLoanBooks = ({loanedBooks, user, selectBook, selectedBook, handleRemove, handleWant, handleFavourite}) => {

    return (      
      
      <div>
        <h2 style={{"margin-left": "50px"}}>Books available to borrow</h2>
        <div className='loan-shelf card'>
            {   loanedBooks &&
                loanedBooks.map((loan, idx) => <BookCard 
                    key={idx}
                    book={loan.book}
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