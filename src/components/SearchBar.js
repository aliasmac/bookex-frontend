import React from 'react'

const SearchBar = (props) => {

    
    return (
        <div>
            <form onSubmit={(e) => props.handleSubmit(e)} >
                <input
                    placeholder="Search for books"
                    type="text"
                    name="searchQuery"
                    onChange={(e) => props.handleChange(e)}
                />
                <button>Search</button>
            </form>
            
        </div>
    )

}

export default SearchBar

