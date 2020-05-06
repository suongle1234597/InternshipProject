import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextFieldGroup = ({
    type,
    info,
    value,
    onChange,
    error
}) => {
    return (
        <div>
            {info ? <p>{info}</p> : ""}
            <div className="input-group">
                <input className="form-control" type="text" value={value} onChange={onChange} />
            </div>
            {/* <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div> */}

        </div>
    )
}

TextFieldGroup.propTypes = {
    type: PropTypes.string,
    info: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

export default TextFieldGroup
