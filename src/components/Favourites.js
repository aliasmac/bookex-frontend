import React from 'react'

import BookCard from './BookCard'

const Favourites = ({user, removeBookFromList}) => {

    return (
        <div>
            <h2>Your Favourites:</h2>
            {
                user.favourite_books.map(book => <BookCard
                key={book.id}
                book={book}
                removeBookFromList={removeBookFromList}
                // selectBook={selectBook}
                list={user.wishlist}
               /> ) 
            }
        </div>
    )
}

export default Favourites