import React from 'react'
import './Search.scss'

const Search = props => {

    const handleSubmit = e => {
        e.preventDefault()
        props.handleSearch()
    }

    return (
        <form onSubmit={handleSubmit} className="search flex container" onClick={props.handleClickSearch}>
            <button onClick={props.handleSearch}><i className="fas fa-search"></i></button>
            <input type="text" placeholder={`Search equipments for ${props.function}`} value={props.searchTerm} onChange={props.handleChange} />
        </form>
    )
}

export default Search
