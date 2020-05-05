import React, { useState, useRef } from 'react'
import './Search.scss'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = e => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="search flex container">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search equipments for sale" value={searchTerm} onChange={handleSearch} />
        </div>
    )
}

export default Search
