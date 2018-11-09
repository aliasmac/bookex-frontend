import React from 'react'

import ToReadList from '../components/ToReadList'
import ProfileBox from '../components/ProfileBox'

class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        // state = {
            
        // }
    }

    render() {

        let { books } = this.props;

        return (
            <div>
                <ProfileBox />
                {/* <ReadList /> */}
                <ToReadList books={books} />
                
            </div>
            
        )
    }

}

export default UserProfile