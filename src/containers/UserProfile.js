import React from 'react'

import ToReadList from '../components/ToReadList'
import ProfileBox from '../components/ProfileBox'
import BookDetails from '../components/BookDetails'

class UserProfile extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            finishedReading: [],
            favorites: [],
            currentlyReading: [],
            ProfileBox: []
        }
   
        
    }

    // Finished Reading List
    addToFinishReading = () => {

    }

    removeToFinishReading = () => {

    }

    // Currently Reading
    addToCurrentlyReading = () => {

    }

    removeToCurrentlyReading = () => {

    }

    // FETCH USER PROFILE

    render() {

        let { wishlist } = this.props;

        return (
            <div>
                {/* <ProfileBox /> */}
                {
                    this.props.selectedBook ? 
                    <BookDetails
                        book={this.props.selectedBook}
                        deselectBook={this.props.deselectBook}
                        wishlist={wishlist}
                        addBookToUser={this.props.addBookToUser}
                        removeBookFromUser={this.props.removeBookFromUser}
                    /> :
                    <ToReadList
                        wishlist={wishlist}
                        removeBookFromUser={this.props.removeBookFromUser}
                        selectedBook={this.props.selectedBook}
                        selectBook={this.props.selectBook}
                    />
                    // <CurrentlyReading
                    
                    // />
                    // <Favorites
                    // />
                    
                }
                
                {/* <CurrentlyReading />
                <FinsishedReading /> */}

                
            </div>
            
        )
    }

}

export default UserProfile