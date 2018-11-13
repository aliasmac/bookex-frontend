import React from 'react'

import BookCard from './BookCard'

const Favourites = ({ user, handleRemove, selectBook, selectedBook}) => {

    return (
        <div className="favourites-list">
            <h2>Your Favourites:</h2>
            {
                user.favourite_books.map(book => <BookCard
                key={book.id}
                book={book}
                handleRemove={handleRemove}
                selectBook={selectBook}
                selectedBook={selectedBook}
                user={user}
                listType="favourite_books"

               /> ) 
            }
        </div>
    )
}

export default Favourites