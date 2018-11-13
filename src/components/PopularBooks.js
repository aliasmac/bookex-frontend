import React from 'react'


class PopularBooks extends React.Component {

    state = {
      popularBooks: []
    }  

    // LIVE FETCHING OF POPULAR BOOKS
    componentDidMount() { 
        console.log("FETCHING")
        this.getPopularBooks()
        this.interval = setInterval(this.getPopularBooks, 10000)
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

        console.log("POPULARBOOKS:", this.state.popularBooks)

        return (
            <div className="popular-books" >
            <h2>Books trending in the IBDB Community</h2>
            {
                this.state.popularBooks.map((book, idx) => 
                <div key={idx} className="popular-book-div">
                    <h3>{book.book.title}</h3>
                    <p>No. of readers: {book.readers}</p>
                </div>)
            }
        </div>
        )
    }

} 

export default PopularBooks