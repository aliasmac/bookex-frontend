import React from 'react'

class SearchBar extends React.Component {

  state = {
    searchQuery: ""
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }  

  handleSubmit = e => {
    e.preventDefault()
    this.props.submitSearch(this.state.searchQuery)
    this.setState({ searchQuery: ""})
  }

  render() {

    return (
        <div className="search">
            <form onSubmit={this.handleSubmit} className={'search'}>
                <input
                    placeholder="Search for books"
                    type="text"
                    name="searchQuery"
                    value={this.state.searchQuery}
                    onChange={this.handleChange}
                />
                <button className='search-btn'>Search</button>
            </form>
        </div>
    )
    }
}

export default SearchBar

