import React from 'react'
import BookCard from '../BookCard/BookCard'

const BookResults = ({selectBook, handleWant, handleFavourite, books, user}) => {

    return (
      <div className='left-container'>
        <div className="results">
            {books.map((book, idx) => <BookCard key={idx} book={book}
                            selectBook={selectBook}
                            loanObject={null}
                            handleWant={handleWant}
                            handleFavourite={handleFavourite}
                            user={user}
                            /> ) }
        </div>
      </div>
    ) 
}

export default BookResults