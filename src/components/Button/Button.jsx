import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import '../../reset.scss'

const Button = props => {
    return (
        <Link to={props.link}><button className="button">{props.name}</button></Link>
    )
}

export default memo(Button)
