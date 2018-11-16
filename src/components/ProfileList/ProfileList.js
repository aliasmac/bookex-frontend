import React from 'react'
import BookCard from '../BookCard/BookCard'
import './ProfileList.css'

const ProfileList = 
({user, selectBook, selectedBook, handleRemove, wishlist}) => {

    let listBooks = wishlist ? user.wishlist : user.favourite_books

    return (

        <div className="list-container">
            <h2>Your {wishlist ? ' Wishlist' : ' Favourite Books'}</h2>
            <div className="card list">
          {
            listBooks.length  === 0
            ? 
              wishlist
              ?
              <h2>You have no books on your wishlist - get searching!</h2> 
              :
              <h2>You have no favourite books saved - go find them!</h2>
            : 
            null
          }
      
            {
               listBooks.map(book => <BookCard
                key={book._id}
                book={book}
                handleRemove={handleRemove}
                selectBook={selectBook}
                selectedBook={selectedBook}
                user={user}
                listType={wishlist ? "wishlist" : "favourite_books"}
               /> ) 
            }
            </div>
        </div>
    )
}

export default ProfileList