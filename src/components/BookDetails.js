import React from 'react'

const BookDetails = ({ book, user, handleFavourite, 
    handleWant, deselectBook, currentlyReading}) => {

      console.log("BOOK DETAILS", book)
      console.log(user)

      let favourite
      let wanted
      let current
      if (user && user.wishlist.find(x => 
          parseInt(x.ISBN_13) === parseInt(book.ISBN_13))) {
           wanted = true
        }
      if (user && user.favourite_books.find(x => 
          parseInt(x.ISBN_13) === parseInt(book.ISBN_13))) {
           favourite = true
        }
      if (user && user.currently_reading &&
          parseInt(user.currently_reading.ISBN_13) === parseInt(book.ISBN_13)) {
           current = true
        }

  

      return (
          <div className="book-details"> 
            <div>
              <h2>{book.title}</h2>
              <h3>Author(s): {book.author}</h3>
            <button onClick={() => currentlyReading(book)} 
              className='card-btn btn-black'
              disabled={current} >
                  {!current ? "I'm currently reading this book!" : "You are currently reading this book" }
                  </button>
            <br /><br />
              </div>
              <div>
                  <img src={
                      book.image ?
                      book.image :
                      './comingsoon.jpeg'} 
                      alt={book.title}
                  />            
              </div>
              <div class="book-description">
                  <p>{book.description}</p>
              </div>
              <div>
                  <p>ISBN: {book.ISBN_13}</p>
              </div>

              <button className={'card-btn details-btn btn-black'} onClick={() => deselectBook()} >Close details</button>

              <button
                className={'card-btn details-btn ' + (favourite ? 'btn-favourite' : 'btn-red')}
                onClick={() => handleFavourite(book)} 
                disabled={!user}>
                {favourite ? 'De-favourite' : 'Add to favourites'}
                  </button>

              <button
                className={'card-btn details-btn ' + (wanted ? 'btn-wanted' : 'btn-green')}
                onClick={() => handleWant(book)}
                disabled={!user} >
                {wanted ? 'Un-wishlist' : 'Add to wishlist'}
              </button>
          </div>
      )

}


export default BookDetails
