import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class MediaCard extends React.Component {


    render() {

      console.log(this.props)

      const { book, classes } = this.props

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
            <Button size='small' variant="outlined" color="default" 
             onClick={() => this.props.selectBook(book)} >
                Details
            </Button>
            <Button size='small' variant="outlined" color="secondary" 
             onClick={() => this.props.selectBook(book)} >
              &#10084;
            </Button>
            <Button size='small' variant="outlined" color="default"
             onClick={() => this.props.selectBook(book)} >
              Wishlist
            </Button>
            {
              this.props.books ?
              this.props.books.includes(book) && <Button onClick={() => this.props.removeBookFromUser(book.title)}>Remove from Read list</Button> :
              null
            }
          </CardActions>
        </Card>
      );
        }
        
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MediaCard;


