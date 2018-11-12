import React from 'react'


class PopularBooks extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {

        console.log("POPULARBOOKS:", this.props)

        return (
            <div className="popular-books" >
            <h2>Books trending in the IBDB Community</h2>
            {
                this.props.popularBooks.map((book, idx) => 
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