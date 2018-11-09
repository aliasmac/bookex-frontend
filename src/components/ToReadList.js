import React from 'react'
import BookResults from './BookResults';

import Book from './Book'


const ToReadList = (props) => {

    console.log("BOOK DETAILS", props)

    return (
        <div>
            <h2>You're Read List</h2>
            {
               props.books.map((book, idx) => <Book key={idx} book={book} /> ) 
            }
        </div>
    )


}

export default ToReadList