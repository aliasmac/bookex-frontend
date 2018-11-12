import React from 'react'

import Wishlist from '../components/Wishlist'
import ProfileBox from '../components/ProfileBox'
import BookDetails from '../components/BookDetails'
import Favourites from '../components/Favourites'

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
                    user && 
                    <div>
                    <Wishlist
                        user={user}
                        addBookToList={addBookToList}
                        removeBookFromList={removeBookFromList}
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