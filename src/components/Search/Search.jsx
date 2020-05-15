import React, { useState, useEffect } from 'react'
import './Search.scss'

const Search = props => {
    useEffect(() => {
        props.handleSearch()
        return () => {
            console.log("clean up")
        }
    }, [props.searchTerm])

    const handleSubmit = e => {
        e.preventDefault()
        props.handleSearch()
    }

    return (
        <form onSubmit={handleSubmit} className="search flex container">
            <button onClick={props.handleSearch()}><i className="fas fa-search"></i></button>
            <input type="text" placeholder={`Search equipments for ${props.function}`} value={props.searchTerm} onChange={props.handleChange} />
        </form>
    )
}

export default Search
