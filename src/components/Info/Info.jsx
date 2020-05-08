import React from 'react'
import './Info.scss'

const Info = props => {
    return (
        <div className="info">
            <h6>{props.func}</h6>
            {props.info && props.info.map(item => <>
                <p>{item}</p>
                <br />
            </>)}

        </div>
    )
}

export default Info
