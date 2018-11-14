import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import comingSoon from './comingsoon.jpeg'

class BookCard extends React.Component {
  
    render() {

      const { book, handleWant, handleFavourite, handleRemove, user, listType } = this.props

      let favourite
      let wanted

      if (user && user.wishlist.find(x =>
        parseInt(x.ISBN_13) === parseInt(book.ISBN_13))) {
        wanted = true
      }
      if (user && user.favourite_books.find(x =>
        parseInt(x.ISBN_13) === parseInt(book.ISBN_13))) {
        favourite = true
      }

      return (

        <Card className={(listType ? 'book-card-small' : 'book-card' )}>

            <img
              className={(listType ? 'book-image-small' : 'book-image' )}
              onClick={() => this.props.selectBook(book)}
              src={
                    book.image ?
                    book.image :
                    comingSoon
              }
              alt={book.title}
            />

          <CardActions className="card-actions" >

            <button className={'card-btn btn-black' + (listType ? ' hidden' : ' show')}
                onClick={() => this.props.selectBook(book)} >
                Info
              </button>

            <button 
            className={'card-btn ' + (favourite ? 'btn-favourite' : 'btn-red')
                + (listType ? ' hidden' : ' show')}
              disabled={!user}

              onClick={() => handleFavourite(book)} >
              &#10084;
            </button>

            <button 
            className={'card-btn ' + (wanted ? 'btn-wanted' : 'btn-green' ) 
                + (listType ? ' hidden' : ' show')}

              disabled={!user}
              onClick={() => handleWant(book)} >
              { wanted ? 'Unwant' : 'Want'}
            </button>
          </CardActions>

          {listType  ?
               <button className="remove-btn" onClick={() => handleRemove(book, listType)}>X</button> :
                null
              }

        </Card>
      );
        }
        
}

export default BookCard


