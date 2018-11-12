import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

class BookCard extends React.Component {

    render() {

      console.log(this.props)

      const { book } = this.props

      return (
        <Card className={'book-card'}>
            <img
              className={'book-image'}
              src={
                    book.image ?
                    book.image :
                    './comingsoon.jpeg'
              }
              alt={book.title}
            />
          <CardActions>
            <button className={'card-btn btn-black'}
              onClick={() => this.props.selectBook(book)} >
              Info
            </button>
            <button className={'card-btn btn-red'}
              onClick={() => this.props.selectBook(book)} >
              &#10084;
            </button>
            <button className={'card-btn btn-green'}
              onClick={() => this.props.selectBook(book)} >
              Want
            </button>
            {
              this.props.books ?
              this.props.books.includes(book) && <button onClick={() => this.props.removeBookFromUser(book.title)}>Remove from Read list</button> :
              null
            }
          </CardActions>
        </Card>
      );
        }
        
}

export default BookCard


