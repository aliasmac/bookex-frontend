import React from 'react'

import ToReadList from '../components/ToReadList'
import ProfileBox from '../components/ProfileBox'
import BookDetails from '../components/BookDetails'

class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        
    }

    // FETCH USER PROFILE

    render() {

        let { userBooks } = this.props;

        return (
            <div>
                {/* <ProfileBox /> */}
                {
                    this.props.selectedBook ? 
                    <BookDetails
                        book={this.props.selectedBook}
                        deselectBook={this.props.deselectBook}
                        userBooks={userBooks}
                        addBookToUser={this.props.addBookToUser}
                        removeBookFromUser={this.props.removeBookFromUser}
                    /> :
                    <ToReadList
                    userBooks={userBooks}
                    removeBookFromUser={this.props.removeBookFromUser}
                    selectedBook={this.props.selectedBook}
                    selectBook={this.props.selectBook}
                />
                    
                }
                
                {/* <CurrentlyReading />
                <FinsishedReading /> */}

                
            </div>
            
        )
    }

}

export default UserProfile