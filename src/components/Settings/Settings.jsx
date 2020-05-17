import React from 'react'
import { Link } from 'react-router-dom'
import './Settings.scss'
import Button from '../Button/Button'

const Settings = () => {
    return (
        <div className="settings">
            <div className="head flex" >
                <Link to='/'>
                    <button className="done flex" >
                        <i className="fas fa-chevron-left"></i>
                        Back
                </button>
                </Link>

                <h6>Settings</h6>
            </div>

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
            <div className="footer">
                <Link to="/">Hove more Questions?</Link>
                <Button className="view" link="/" name="Call us" />
            </div>
        </div>
    )
}

export default Settings
