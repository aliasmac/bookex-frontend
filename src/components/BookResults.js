import React from 'react'

import Book from './Book'


const BookResults = (props) => {
    
    console.log("BOOK RESULTS", props)

    return (
        <div className="results">
            {props.books.map((book, idx) => <Book key={idx} book={book} selectBook={props.selectBook} /> ) }
        </div>
    ) 

}

export default BookResults