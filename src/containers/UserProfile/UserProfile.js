import React from 'react'

import ProfileBox from '../../components/ProfileBox/ProfileBox'
import BookDetails from '../../components/BookDetails/BookDetails'
import ProfileList from './ProfileList'
import './UserProfile.css'

class UserProfile extends React.Component {

    handleRemove = (book, listType) => {
      if (listType === 'wishlist') {
        this.props.handleWant(book)
      } else if (listType === 'favourite_books') {
        this.props.handleFavourite(book)
      }
    }

    render() {

      const {selectedBook, selectBook, deselectBook, user, handleWant, handleFavourite, currentlyReading, handleLoaned, loanedBooks} = this.props

        return (

          <React.Fragment>
            <div className="left-container">
              {
              user && 
              <React.Fragment>
                 <ProfileList
                    user={user}
                    handleRemove={this.handleRemove}
                    selectedBook={selectedBook}
                    selectBook={selectBook}
                    wishlist={true}
                  />
                
                  <ProfileList
                    user={user}
                    handleRemove={this.handleRemove}
                    selectedBook={selectedBook}
                    selectBook={selectBook}
                    wishlist={false}
                  /> 

              </React.Fragment>
              }
            </div>
              <div className='right-container'>
              {
                  selectedBook ? 
                  <BookDetails
                      book={selectedBook}
                      deselectBook={deselectBook}
                      user={user}
                      currentlyReading={currentlyReading}
                      handleWant={handleWant}
                      handleFavourite={handleFavourite}
                      handleLoaned={handleLoaned}
                      loanedBooks={loanedBooks}
                  /> :

                  <ProfileBox
                    user={user}
                    handleRemove={this.handleRemove}
                    selectedBook={selectedBook}
                    selectBook={selectBook}
                  /> 
              }
              </div>       
          </React.Fragment >
        )
    }

}

export default UserProfile