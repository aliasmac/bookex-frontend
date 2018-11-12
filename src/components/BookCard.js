import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import comingSoon from './comingsoon.jpeg'

class BookCard extends React.Component {

    render() {

      const { book, addBookToList, list, removeBookFromList } = this.props

      return (
        <Card className={'book-card' + (list ? '-hidden' : '-show' )}
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
          <CardActions>
            <button className={'card-btn btn-black' + (list ? '-hidden' : '-show')}
              onClick={() => this.props.selectBook(book)} >
              Info
            </button>

            <button className={'card-btn btn-red' + (list ? '-hidden' : '-show')}
              onClick={() => addBookToList(book, 'favourite_books')} >
              &#10084;
            </button>
            <button className={'card-btn btn-green' + (list ? '-hidden' : '-show')}
               onClick={() => addBookToList(book, 'wishlist')} >
              Want
            </button>

            {
              list ?
              list.includes(book) && <button onClick={() => removeBookFromList(book, 'wishlist')}>Remove from Read list</button> :
              null
            }
          </CardActions>
        </Card>
      );
        }
        
}

export default BookCard


