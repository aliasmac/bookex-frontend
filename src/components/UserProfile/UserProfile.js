import React from 'react'
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

      const {selectedBook, selectBook, user} = this.props

        return (

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
 
        )
    }

}

export default UserProfile