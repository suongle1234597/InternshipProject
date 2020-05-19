import React, { memo } from 'react'
import './Info.scss'
import { Link } from 'react-router-dom'

const Info = props => {
    return (
        <div className="info">

            <div className="head flex">
                <Link to='/settings'><button className="done flex" >
                    <i className="fas fa-chevron-left"></i>
                    Back
                </button>
                </Link>

                <h6>{props.func}</h6>
            </div>

            {props.info && props.info.map((item, index) => <>
                <p key={index}>{item}</p>
                <br />
            </>)}
        </div>
    )
}

export default memo(Info)
