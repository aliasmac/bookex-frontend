import React from 'react'

import Wishlist from '../components/Wishlist'
import ProfileBox from '../components/ProfileBox'
import BookDetails from '../components/BookDetails'

class UserProfile extends React.Component {

    render() {

      const {selectedBook, selectBook, deselectBook, user, handleWant, handleFavourite} = this.props

        return (
            <div>
                {/* <ProfileBox /> */}
                {
                    selectedBook ? 
                    <BookDetails
                        book={selectedBook}
                        deselectBook={deselectBook}
                        user={user}
                        handleWant={handleWant}
                        handleFavourite={handleFavourite}
                    /> :
                    user ? 
                    <Wishlist
                        user={user}
                        handleWant={handleWant}
                        handleFavourite={handleFavourite}
                        selectedBook={selectedBook}
                        selectBook={selectBook}
                    /> : null
                    // <CurrentlyReading
                    
                    // />
                    // <Favorites
                    // />
                    
                }
                              
            </div>
            
        )
    }

}

export default UserProfile