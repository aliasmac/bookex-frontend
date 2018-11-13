import React from 'react'

import BookCard from './BookCard'

const Favourites = ({ user, handleRemove, selectBook, selectedBook, historyProps}) => {

    return (
        <div className="favourites-list-container">
            <h2>Your Favourites:</h2>
            <div className="favourites-list">
            {
                user.favourite_books.length === 0 ? <button onClick={() => historyProps.push('/')} >Search Books to add to your favourite list</button> : null
            }
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
        </div>
    )
}

export default Favourites