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

      const {selectedBook, selectBook, deselectBook, user, handleWant, handleFavourite, currentlyReading, handleLoaned} = this.props

        return (
            <div  className="user-profile-main" >
              <div className="profile-lists-container">
                {
                     user && 
                     <React.Fragment>
    
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
                     </React.Fragment>
           
                }
              </div>
                <div className='profile-container'>
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
                    /> :

                    <ProfileBox
                       user={user}  
                    /> 
                }
              </div>       
            </div>
            
        )
    }

}

export default UserProfile