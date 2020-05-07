import React from 'react'
import { Link } from 'react-router-dom'
import './Settings.scss'

const Settings = () => {
    return (
        <div className="settings">
            <h6>Settings</h6>
            <Link to='/aboutUs'>
                <div className="item flex">
                    About us
                <i className="fas fa-chevron-right"></i>
                </div>
            </Link>
            <Link to='/termsAndConditions'>
                <div className="item flex">
                    Terms And Conditions
                <i className="fas fa-chevron-right"></i>
                </div>
            </Link>
            <Link to='/'>
                <div className="item flex">
                    Privacy Policy
                <i className="fas fa-chevron-right"></i>
                </div>
            </Link>
            <Link to='/'>
                <div className="item flex">
                    App version
                <p>1.0</p>
                </div>
            </Link>
            <Link to='/'>
                <div className="item logout">
                    Logout
            </div>
            </Link>
            <div className="contact">
                <p>Hove more Questions?</p>
                <button className="view">Call us</button>
            </div>
        </div>
    )
}

export default Settings
