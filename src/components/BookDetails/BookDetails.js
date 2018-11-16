import React from 'react'
import './BookDetails.css'

const BookDetails = ({ book, user, handleFavourite, 
    handleWant, deselectBook, currentlyReading, handleLoaned, loanObject, loanedBooks}) => {

  const amazonUrl = 'https://www.amazon.co.uk/s/?search-alias=stripbooks&field-isbn='
  const googleUrl = 'https://www.google.com/search?tbo=p&tbm=bks&q=isbn:'

      let favourite
      let wanted
      let current
      let loan

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

      if (loanedBooks.find(x =>
          parseInt(x.book.ISBN_13) === parseInt(book.ISBN_13) &&
           x.user._id === user._id)
          ) {
          loan = true
        }

  return (
      <div className="right-box book-details card"> 
        <h2>{book.title}</h2>
        <h3>Author(s): {book.author}</h3>
        {loanObject &&
          <div className="loan-message">{loanObject.user.name || loanObject.user.username} has this to loan!</div>
        }
        <div className='details-cols'>

          <div className='details-left-col'>
            <button className={'main-btn details-btn close-button'} onClick={() => deselectBook()} >Close details</button>
            
            <button onClick={() => currentlyReading(book)} 
            className='main-btn btn-black details-btn'
            disabled={current || !user} >
                {!current ? "I'm reading this!" : "You are reading this" }

            </button>

            <button
              className={'main-btn details-btn ' + (favourite ? 'btn-favourite' : 'btn-red')}
              onClick={() => handleFavourite(book)}
              disabled={!user}>
              {favourite ? 'De-favourite' : 'Add to favourites'}
            </button>

            <button
              className={'main-btn details-btn ' + (wanted ? 'btn-wanted' : 'btn-green')}
              onClick={() => handleWant(book)}
              disabled={!user} >
              {wanted ? 'Un-wishlist' : 'Add to wishlist'}
            </button>

            {
              <button
              className={'main-btn details-btn ' + (loan ? 'btn-loaned' : 'btn-loan')}
              onClick={() => handleLoaned(book, user)}
              disabled={!user} >
               {loan ? 'Take off loan shelf' : 'Offer for loan'}
              </button>
            }
          </div>
          
          <div className='details-right-col'>
                <img src={
                    book.image ?
                    book.image :
                    './comingsoon.jpeg'} 
                    alt={book.title}
                />            
          </div>

        </div>

        <div class='details-links'>
          <a href={amazonUrl + book.ISBN_13} target="_blank" rel="noopener noreferrer">
            Amazon
          </a>
          <span>|</span>
          <a href={googleUrl + book.ISBN_13} target="_blank" rel="noopener noreferrer">
            Google Books
          </a>
        </div>

        <div class="book-description">
            <p>{book.description}</p>
        </div>

      </div>
  )

}


export default BookDetails
