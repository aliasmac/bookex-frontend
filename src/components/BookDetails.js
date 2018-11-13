import React from 'react'


const BookDetails = 
  ({ book, user, handleFavourite, handleWant, deselectBook}) => {

    console.log("BOOK DETAILS", book)
    console.log(user)

    return (
        <div className="book-details"> 
            <div>
                <h2>{book.title}</h2>
                <h3>Authors: {book.author}</h3>
            </div>
            <div>
                <img src={
                    book.image ?
                    book.image :
                    './comingsoon.jpeg'} 
                    alt={book.title}
                />            
            </div>
            <div>
                <p>{book.description}</p>
            </div>
            <div>
                <p>ISBN: {book.ISBN_13}</p>
            </div>
            { user && user.wishlist.includes(book) && 
            <button onClick={() => handleWant(book)} >Remove from your wishlist</button> }
            { user && <button onClick={() => {
                    handleWant(book)
                    deselectBook()
                    }
                } >Add to your wishlist</button>  }
                

            <button onClick={() => deselectBook()} >Back to search results</button>

        </div>
    )
}


export default BookDetails
