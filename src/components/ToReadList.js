import React from 'react'
import BookResults from './BookResults';

import BookCard from './BookCard'


const ToReadList = (props) => {

    return (
        <div>
            <h2>Your Wishlist</h2>
            {
               props.wishlist.map((book, idx) => <BookCard
                key={idx}
                book={book}
                wishlist={props.wishlist}
                selectedBook={props.selectedBook}
                selectBook={props.selectBook}
                removeBookFromUser={props.removeBookFromUser}
               /> ) 
            }
        </div>
    )

}

export default ToReadList