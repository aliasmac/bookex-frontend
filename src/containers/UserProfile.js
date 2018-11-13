import React from 'react'

import Wishlist from '../components/Wishlist'
import ProfileBox from '../components/ProfileBox'
import BookDetails from '../components/BookDetails'
import Favourites from '../components/Favourites'

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
                    user && 
                    <div>
                    <Wishlist
                        user={user}
                        handleWant={handleWant}
                        handleFavourite={handleFavourite}
                        selectedBook={selectedBook}
                        selectBook={selectBook}

                    />
                    <Favourites
                        user={user}
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