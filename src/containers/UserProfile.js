import React from 'react'

import Wishlist from '../components/Wishlist'
import ProfileBox from '../components/ProfileBox'
import BookDetails from '../components/BookDetails'

class UserProfile extends React.Component {

    render() {

      const {selectedBook, selectBook, deselectBook, user, addBookToList, removeBookFromList} = this.props

        return (
            <div>
                {/* <ProfileBox /> */}
                {
                    selectedBook ? 
                    <BookDetails
                        book={selectedBook}
                        deselectBook={deselectBook}
                        user={user}
                        addBookToList={addBookToList}
                        removeBookFromList={removeBookFromList}
                    /> :
                    user ? 
                    <Wishlist
                        user={user}
                        addBookToList={addBookToList}
                        removeBookFromList={removeBookFromList}
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