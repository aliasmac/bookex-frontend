import React from 'react'

const ProfileBox = (props) => {

    return (
        <div className="right-box profile-box card">
            <h1>Profile</h1>
            <h3>Name: {props.user.username}</h3>
            <p>Currently Reading: { props.user.currently_reading ? props.user.currently_reading.title : 'Nothing yet' } </p>
            <p>Location: {props.user.location}</p>
        </div>
    )

}

export default ProfileBox