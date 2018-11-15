import React from 'react'
import BookCard from './BookCard'


const onLoanBooks = ({loanedBooks, user, selectBook, selectedBook, handleRemove, handleWant, handleFavourite}) => {

    return (      
        <div>
            {   loanedBooks.loans &&
                loanedBooks.loans.map((loan, idx) => <BookCard 
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
    )

}

export default onLoanBooks