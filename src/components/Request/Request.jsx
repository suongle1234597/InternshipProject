import React, { useState } from 'react'
import TextFieldGroup from '../TextFieldGroup/TextFieldGroup'
import './Request.scss'

const Request = () => {
    const [formData, setFormData] = useState({
        productName: "dddddddddd",
        transportationService: "",
        company: "",
        contactName: "",
        contactNumber: "",
        content: ""
    })

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="request">
            <TextFieldGroup value={formData.productName} onChange={handleChange} info="Product" name="productName" />
            <TextFieldGroup value={formData.company} onChange={handleChange} info="Company Name*" name="company" placeholder="e.g. Construction Pt. Ltd." />
            <TextFieldGroup value={formData.contactName} onChange={handleChange} info="Contact Name*" name="contactName" placeholder="e.g. join smith" />
            <div className="number flex">
                <TextFieldGroup value={formData.contactNumber} onChange={handleChange} info="Contact Number*" name="contactNumber" />
                {/* <TextFieldGroup value={formData.contactNumber} onChange={handleChange} name="contactNumber" /> */}
            </div>

            <select name="" id="">
                <option value="">tranjhhj</option>
            </select>
            <p>More info</p>
            <textarea name="content" id="" cols="33" rows="10" placeholder="How can we help?">
            </textarea>
            <button className="submit">Submit</button>
        </div>
    )
}

export default Request
