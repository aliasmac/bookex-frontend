import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import comingSoon from './comingsoon.jpeg'
import './BookCard.css'

class BookCard extends React.Component {
  
    render() {

      const { book, handleWant, handleFavourite, handleRemove, user, listType, loanObject, loanShelf } = this.props

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
              onClick={() => this.props.selectBook(book, loanObject)}
              src={
                    book.image ?
                    book.image :
                    comingSoon
              }
              alt={book.title}
            />

          <CardActions className="card-actions" >

            <button className={'main-btn btn-black' + (listType || loanShelf ? ' hidden' : ' show')}
                onClick={() => this.props.selectBook(book)} >
                Info
              </button>

            <button 
            className={'main-btn ' + (favourite  ? 'btn-favourite' : 'btn-red')
                + (listType || loanShelf ? ' hidden' : ' show')}
              disabled={!user}

              onClick={() => handleFavourite(book)} >
              &#10084;
            </button>

            <button 
            className={'main-btn ' + (wanted || loanShelf ? 'btn-wanted' : 'btn-green' ) 
                + (listType || loanShelf ? ' hidden' : ' show')}

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


