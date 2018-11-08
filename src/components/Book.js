import React from 'react'

const Book = (props) => {

    console.log(props)

    const book = props.book

    return (
        <div className="book-result">
            <h1>{book.title}</h1>
            <img src={
                book.imageLinks ?
                book.imageLinks.thumbnail :
                './comingsoon.jpeg'} 
                />
            <button onClick={() => props.selectBook(book)} >See more details</button>    
        </div>
    )

}

export default Book
