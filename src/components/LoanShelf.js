import React from 'react'
import BookCard from './BookCard'


const LoanShelf = ({loanedBooks, user, selectBook, selectedBook, handleRemove, handleWant, handleFavourite}) => {

    return (      
        <div>
            {
                loanedBooks.loans.map(loan => <BookCard
                    key={loan.book._id}
                    book={loan.book}
                    selectBook={selectBook}
                    selectedBook={selectedBook}
                    handleRemove={null}
                    user={user}
                    handleWant={handleWant}
                    handleFavourite={handleFavourite}
        
                />)
            }
            
        </div>
    )

}

export default LoanShelf