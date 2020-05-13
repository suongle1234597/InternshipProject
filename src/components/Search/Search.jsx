import React, { useState, useEffect } from 'react'
import './Search.scss'

const Search = props => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = e => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        props.handleSearch((searchTerm))
        return () => {
            console.log("clean up")
        }
    }, [searchTerm])

    const handleSubmit = e => {
        e.preventDefault()
        props.handleSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit} className="search flex container">
            <button onClick={() => props.handleSearch(searchTerm)}><i className="fas fa-search"></i></button>
            <input type="text" placeholder={`Search equipments for ${props.function}`} value={searchTerm} onChange={handleSearch} />
        </form>
    )
}

export default Search
