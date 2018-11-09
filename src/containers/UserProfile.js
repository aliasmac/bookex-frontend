import React from 'react'

import ToReadList from '../components/ToReadList'
import ProfileBox from '../components/ProfileBox'

class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        
    }

    // FETCH USER PROFILE

    render() {

        let { books } = this.props;

        return (
            <div>
                {/* <ProfileBox /> */}
                <ToReadList
                    books={books}
                    removeBookFromUser={this.props.removeBookFromUser}
                    selectedBook={this.props.selectedBook}
                    selectBook={this.props.selectBook}
                />
                {/* <CurrentlyReading />
                <FinsishedReading /> */}

                
            </div>
            
        )
    }

}

export default UserProfile