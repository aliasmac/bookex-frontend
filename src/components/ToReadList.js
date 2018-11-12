import React from 'react'
import BookResults from './BookResults';

import BookCard from './BookCard'


const ToReadList = (props) => {

    return (
        <div>
            <h2>Your Reading List</h2>
            {
               props.userBooks.map((book, idx) => <BookCard
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