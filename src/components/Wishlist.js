import React from 'react'
import BookCard from './BookCard'

const Wishlist = ({user, selectBook, selectedBook, handleRemove}) => {

    return (

        <div className="wishlist-container">
            <h2>Your Wishlist</h2>
            <div className="wishlist">
            {
               user.wishlist.map(book => <BookCard
                key={book.id}
                book={book}
                handleRemove={handleRemove}
                selectBook={selectBook}
                selectedBook={selectedBook}
                user={user}
                listType="wishlist"
                className="list-book"
               /> ) 
            }
            </div>
        </div>
    )
}

export default Wishlist