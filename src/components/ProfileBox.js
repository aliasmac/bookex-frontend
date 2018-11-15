import React from 'react'
import BookCard from './BookCard'
import './ProfileBox.css'

const ProfileBox = ({handleRemove, selectBook, selectedBook, user}) => {
  
  const book = user.currently_reading

  return (
    <div className="right-box profile-box card">
      <h1>{user.username}'s profile</h1>
        <table className='user-table'>
        <tbody>
        <tr>
          <td className='user-table-left'>Name:</td>
          <td className='user-table-right'>{user.name ? user.name : user.username}</td>
        </tr>
        <tr>
          <td className='user-table-left'>Location:</td>
          <td className='user-table-right'>{user.location ? user.location : 'not set'}</td>
        </tr>
        </tbody>
      </table>
      <tbody className='profile-reading-header'>
        <td>
          Currently Reading 

      { book ? <BookCard
          book={book}
          selectBook={selectBook}
          user={user}
          profileBook
        />
        : <h4>nothing yet!</h4> }
        </td>
      </tbody>
    </div>
    )

}

export default ProfileBox