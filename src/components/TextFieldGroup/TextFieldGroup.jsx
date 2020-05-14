import React from 'react'
import PropTypes from 'prop-types'
import './TextFieldGroup.scss'

const TextFieldGroup = ({
    type,
    info,
    value,
    onChange,
    error,
    placeholder
}) => {
    return (
        <div className="textFieldGroup">
            {info ? <p>{info}</p> : ""}
            <div>
                <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
            </div>

        </div>
    )
}

TextFieldGroup.propTypes = {
    type: PropTypes.string,
    info: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string
}

export default TextFieldGroup
