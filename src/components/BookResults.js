import React from 'react'

import BookCard from './BookCard'


const BookResults = (props) => {

    return (
        <div className="results">
            {props.books.map((book, idx) => <BookCard key={idx} book={book}
                            selectBook={props.selectBook}
                            addBookToList={props.addBookToList}
                            true={false}
                            /> ) }
        </div>
    ) 
}

export default BookResults