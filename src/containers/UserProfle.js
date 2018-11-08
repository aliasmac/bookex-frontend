import React from 'react'

class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        state = {

        }
    }

    render() {

        let { books } = this.props;

        return (
            <div>
                <ReadList />
                <ToReadList books={books} />
                <Profile />
            </div>
            
        )
    }

}

export default UserProfile