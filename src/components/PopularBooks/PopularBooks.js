import React from 'react'
import BookCard from '../BookCard/BookCard'
import './PopularBooks.css'

class PopularBooks extends React.Component {

    state = {
      popularBooks: []
    }  

    componentDidMount() { 
        this.getPopularBooks()
        this.interval = setInterval(this.getPopularBooks, 20000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getPopularBooks = () => {
        fetch('https://still-plateau-95838.herokuapp.com/books/popular')
            .then(resp => resp.json())
            .then(books => this.setState({popularBooks: books}))
            .catch(err => err)
    }

    render() {

      const {selectBook, selectedBook, user} = this.props
        return (
        <React.Fragment>

          <div className="right-box popular-box card" >
              <h2>Popular books</h2>
            <div className="popular-books">
            {
                this.state.popularBooks.map((book, idx) => 
                <div key={idx} className="popular-book-div">
                  <BookCard
                    book={book.book}
                    selectBook={selectBook}
                    selectedBook={selectedBook}
                    user={user}
                    popular
                  />
                  <p className='popular-reader-count'>{book.readers} reader(s)</p>
                </div>)
            }
            </div>
          </div>
        </React.Fragment>
        )
    }

} 

export default PopularBooks