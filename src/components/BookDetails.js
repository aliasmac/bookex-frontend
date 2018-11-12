import React from 'react'


const BookDetails = (props) => {

    console.log("BOOK DETAILS", props)

    return (
        <div className="book-details"> 
            <div>
                <h2>{props.book.title}</h2>
                <h3>Authors: {props.book.author}</h3>
            </div>
            <div>
                <img src={
                    props.book.image ?
                    props.book.image :
                    './comingsoon.jpeg'} 
                />            
            </div>
            <div>
                <p>{props.book.description}</p>
            </div>
            <div>
                <p>ISBN: {props.book.ISBN_13}</p>
            </div>
            { props.wishlist.includes(props.book) && <button onClick={() => props.removeBookFromUser(props.book.title)} >Remove from your reading list</button> }
            { props.isUser && <button onClick={() => {
                    props.addBookToUser(props.book)
                    props.deselectBook()
                    }
                } >Add to your wishlist</button>  }
                

            <button onClick={() => props.deselectBook()} >Back to search results</button>

        </div>
    )
}


export default BookDetails
