import React from 'react'


const BookDetails = (props) => {

    console.log("BOOK DETAILS", props)

    return (
        <div className="book-details"> 
            <div>
                <h2>{props.book.title}</h2>
                <h3>Authors:</h3>{props.book.authors.map((author, idx) => <h3 key={idx} >{author}</h3>)}
            </div>
            <div>
                <img src={
                    props.book.imageLinks ?
                    props.book.imageLinks.thumbnail :
                    './comingsoon.jpeg'} 
                />            
            </div>
            <div>
                <p>{props.book.description}</p>
            </div>
            <div>
                <p>{props.book.ISBN_13}</p>
            </div>
            <button onClick={() => props.addBookToUser(props.book)} >Add to your read list</button>

        </div>
    )
}


export default BookDetails