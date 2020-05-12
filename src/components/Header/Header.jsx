import React from 'react'
import './Header.scss'

const Header = props => {
    return (
        <header>
            <ul className="flex">
                <li><button onClick={props.handleClickSale} className={!props.toggle ? "active" : ""}>Purchase</button></li>
                <li><button onClick={props.handleClickRent} className={!props.toggle ? "" : "active"}> Rental</button></li>
            </ul>
        </header>
    )
}

export default Header
