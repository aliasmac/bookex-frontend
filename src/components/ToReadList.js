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
                books={props.userBooks}
                removeBookFromUser={props.removeBookFromUser}
                selectBook={props.selectBook}
               /> ) 
            }
        </div>
    )

}

export default ToReadList