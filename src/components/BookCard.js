import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import comingSoon from './comingsoon.jpeg'

class BookCard extends React.Component {
  
    

    render() {


      const { book, handleWant, handleFavourite, user, listType, list } = this.props

      let favourite
      let wanted

      if (user.wishlist.some(x => x.ISBN_13 == book.ISBN_13)) {
        wanted = true
      }
      
      if (user.favourite_books.some(x => x.ISBN_13 == book.ISBN_13)) {
        favourite = true
      }

      return (
        <Card className={'book-card'}>
            <img className={'book-image'}
   

      return (
        
        <Card className={'book-card' + (list ? '-small' : null )}
              onClick={() => this.props.selectBook(book)}>
            <img
              className={'book-image'}

              src={
                    book.image ?
                    book.image :
                    comingSoon
              }
              alt={book.title}
            />
          <CardActions >
            < React.Fragment  className= list ? 'hidden' : 'show') >
            <button className={'card-btn btn-black'}
              onClick={() => this.props.selectBook(book)} >
              Info
            </button>

            <button 
            className={'card-btn ' + (favourite ? 'btn-favourite' : 'btn-red')}
              onClick={() => handleFavourite(book)} >
              &#10084;
            </button>

            <button 
            className={'card-btn ' + (wanted ? 'btn-wanted' : 'btn-green' ) }
               onClick={() => handleWant(book)} >
              { wanted ? 'Unwant' : 'Want'}
            </button>
            
            </ React.Fragment >
            {
              list ?
              list.includes(book) && <button onClick={() => removeBookFromList(book, listType )}>Remove from Read list</button> :
              null
            }
          </CardActions>
        </Card>
      );
        }
        
}

export default BookCard


