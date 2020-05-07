import React from 'react'
import { Link } from 'react-router-dom'
import './Settings.scss'

const Settings = () => {
    return (
        <div className="settings">
            <div className="item">
                <Link to='/aboutUs'>About us</Link>
            </div>
            <div className="item">
                <Link to='/termsAndConditions'>Terms And Conditions</Link>
            </div>
            <div className="item">
                <Link to='/'>Privacy Policy</Link>
            </div>
            <div className="item">
                <Link to='/'>App version</Link>
            </div>
            <div className="item">
                <Link to='/'>Logout</Link>
            </div>
        </div>
    )
}

export default Settings
