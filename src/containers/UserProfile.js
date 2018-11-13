import React from 'react'

import Wishlist from '../components/Wishlist'
import ProfileBox from '../components/ProfileBox'
import BookDetails from '../components/BookDetails'
import Favourites from '../components/Favourites'

class UserProfile extends React.Component {

    handleRemove = (book, listType) => {
      if (listType === 'wishlist') {
        this.props.handleWant(book)
      } else if (listType === 'favourite_books') {
        this.props.handleFavourite(book)
      }
    }

    render() {

      const {selectedBook, selectBook, deselectBook, user, handleWant, handleFavourite, currentlyReading} = this.props

        return (
            <div>
                {/* <ProfileBox /> */}
                {
                    selectedBook ? 
                    <BookDetails
                        book={selectedBook}
                        deselectBook={deselectBook}
                        user={user}
                        currentlyReading={currentlyReading}
                        handleWant={handleWant}
                        handleFavourite={handleFavourite}
                    /> :
                    user && 
                    <div>
                    <Wishlist
                        user={user}
                        handleRemove={this.handleRemove}
                        selectedBook={selectedBook}
                        selectBook={selectBook}
                    />
                    <Favourites
                        user={user}
                        handleRemove={this.handleRemove}
                        selectedBook={selectedBook}
                        selectBook={selectBook}
                    /> 
                    </div>
                    // <CurrentlyReading/>
            
                    // />
                    
                }
                              
            </div>
            
        )
    }

}

export default UserProfile