import React from 'react'
import BookResults from './BookResults';

import Book from './Book'


const ToReadList = (props) => {

    console.log("BOOK DETAILS", props)

    return (
        <div>
            <h2>Your Reading List</h2>
            {
               props.books.map((book, idx) => <Book key={idx} book={book} books={props.books} removeBookFromUser={props.removeBookFromUser} /> ) 
            }
        </div>
    )


}

export default ToReadList