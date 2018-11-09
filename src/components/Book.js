// import React from 'react'

// const Book = (props) => {

//     console.log(props)

//     const book = props.book

//     return (
//         <div className="book-result">
//             <h1>{book.title}</h1>
//             <img src={
//                 book.image ?
//                 book.image :
//                 './comingsoon.jpeg'} 
//                 />
//             <button onClick={() => props.selectBook(book)} >See more details</button>    
//         </div>
//     )

// }

// export default Book







import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = {
  card: {
    width: 200,
    maxHeight: 400
  },
  media: {
    height: 140,
  },
}

class MediaCard extends React.Component {

  


    render() {

      console.log(this.props)

      const { classes, book } = this.props;



      return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={
                
                    book.image ?
                    book.image :
                    './comingsoon.jpeg'
                    
              }
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {book.title}
              </Typography>
              {/* <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary"  onClick={() => this.props.selectBook(book)} >
                See more details
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

export default withStyles(styles)(MediaCard);


