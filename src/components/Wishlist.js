import React from 'react'
import BookCard from './BookCard'

const Wishlist = ({user, selectBook, addBookToList, removeBookFromList}) => {

    return (
        <div>
            <h2>Your Wishlist</h2>
            {
               user.wishlist.map(book => <BookCard
                key={book.id}
                book={book}
                handleWant={() => removeBookFromList(book, 'wishlist')}
                selectBook={selectBook}
                wanted
               /> ) 
            }
        </div>
    )
}

export default Wishlist