import React from 'react'

import BookCard from './BookCard'


const BookResults = (props) => {
    
    console.log("BOOK RESULTS", props)

    return (
        <div className="results">
            {props.books.map((book, idx) => <BookCard key={idx} book={book} selectBook={props.selectBook} /> ) }
        </div>
    ) 

}

export default BookResults