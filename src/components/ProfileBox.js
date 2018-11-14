import React from 'react'

const ProfileBox = (props) => {

    return (
        <div className="profile-box">
            <h1>Profile</h1>
            <h3>Name: {props.user.username}</h3>
            <p>Currently Reading: {props.user.currently_reading ? props.user.currently_reading.title : "Nothing Yet"}</p>
            <p>Location: {props.user.location}</p>
        </div>
    )

}

export default ProfileBox