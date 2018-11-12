import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import comingSoon from './comingsoon.jpeg'

class BookCard extends React.Component {

    render() {

      const { book, addBookToList } = this.props

      return (
        <Card className={'book-card'}>
            <img
              className={'book-image'}
              src={
                    book.image ?
                    book.image :
                    comingSoon
              }
              alt={book.title}
            />
          <CardActions>
            <button className={'card-btn btn-black'}
              onClick={() => this.props.selectBook(book)} >
              Info
            </button>
            <button className={'card-btn btn-red'}
              onClick={() => addBookToList(book, 'favourite_books')} >
              &#10084;
            </button>
            <button className={'card-btn btn-green'}
               onClick={() => addBookToList(book, 'wishlist')} >
              Want
            </button>

            {
              this.props.books ?
              this.props.books.includes(book) && <button onClick={() => this.props.removeBookFromList(book.title)}>Remove from Read list</button> :
              null
            }
          </CardActions>
        </Card>
      );
        }
        
}

export default BookCard


