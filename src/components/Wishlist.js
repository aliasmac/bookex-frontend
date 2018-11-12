import React from 'react'
import BookCard from './BookCard'

const Wishlist = ({user, selectBook, handleWant, handleFavourite}) => {

    return (

        <div>
            <h2>Your Wishlist</h2>
            {
               user.wishlist.map(book => <BookCard
                key={book.id}
                book={book}
                handleWant={handleWant}
                handleFavourite={handleFavourite}
                selectBook={selectBook}
                user={user}
               /> ) 
            }
        </div>
    )
}

export default Wishlist