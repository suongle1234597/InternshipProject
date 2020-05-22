import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './TextFieldGroup.scss'
import isEmpty from '../../isEmpty'

const TextFieldGroup = ({
    className,
    disabled,
    type,
    info,
    value,
    onChange,
    error,
    placeholder
}) => {
    return (
        <div className={!isEmpty(className) ? `textFieldGroup ${className}` : "textFieldGroup"}>
            {info ? <p>{info}</p> : ""}
            < div >
                <input type="text" value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
            </div >
        </div >
    )
}

TextFieldGroup.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.oneOf([true, false]),
    type: PropTypes.string,
    info: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string
}

export default memo(TextFieldGroup)
