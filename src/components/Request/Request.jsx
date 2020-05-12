import React, { useState, useEffect } from 'react'
import TextFieldGroup from '../TextFieldGroup/TextFieldGroup'
import './Request.scss'
import { getTransportationDetail } from '../../action/TransportationAction'
import { getProductDetail } from '../../action/ProductAction'
import { useSelector, useDispatch } from 'react-redux'
import is_Empty from '../../isEmpty'

const Request = props => {
    const transportationDetail = useSelector(state => state.transportationReducer.transportationDetail)
    const productDetail = useSelector(state => state.productReducer.productDetail)
    const dispatch = useDispatch()

    const id = props.match.params.id

    const [formData, setFormData] = useState({
        productName: "dddddddddd",
        transportationService: "",
        company: "",
        contactName: "",
        contactNumber: "",
        content: ""
    })

    useEffect(() => {
        if (props.match.path.split('/')[1] === "requestproduct") {
            dispatch(getProductDetail(id))
        }
        else {
            dispatch(getTransportationDetail(id))
        }
        return () => {
            console.log("clean up")
        }
    }, [])

    useEffect(() => {
        if (!is_Empty(transportationDetail)) {
            setFormData({
                ...formData,
                productName: transportationDetail.transportation_type
            })
        }
        return () => {
            console.log("clean up")
        }
    }, [transportationDetail])

    useEffect(() => {
        if (!is_Empty(productDetail)) {
            setFormData({
                ...formData,
                productName: productDetail.model + " " + productDetail.brand.name
            })
        }
        return () => {
            console.log("clean up")
        }
    }, [productDetail])

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            {props.match.path.split('/')[1] === "requestproduct" ?
                <div className="request">
                    <h6>Request for Quote</h6>
                    <TextFieldGroup value={formData.productName} onChange={handleChange} info="Product" name="productName" />
                    <select name="" id="">
                        <option value="">Purchase</option>
                    </select>
                    <TextFieldGroup value={formData.company} onChange={handleChange} info="Company Name*" name="company" placeholder="e.g. Construction Pt. Ltd." />
                    <TextFieldGroup value={formData.contactName} onChange={handleChange} info="Contact Name*" name="contactName" placeholder="e.g. join smith" />
                    <div className="number flex">
                        <TextFieldGroup value={formData.contactNumber} onChange={handleChange} info="Contact Number*" name="contactNumber" />
                        {/* <TextFieldGroup value={formData.contactNumber} onChange={handleChange} name="contactNumber" /> */}
                    </div>
                    <p>More info</p>
                    <textarea name="content" id="" cols="33" rows="10" placeholder="How can we help?">
                    </textarea>
                    <button className="submit">Submit</button>
                </div>
                :
                <div className="request">
                    <h6>Request for Quote</h6>
                    <TextFieldGroup value={formData.productName} onChange={handleChange} info="Product" name="productName" />
                    <select name="" id="">
                        <option value="">Purchase</option>
                    </select>
                    <TextFieldGroup value={formData.company} onChange={handleChange} info="Company Name*" name="company" placeholder="e.g. Construction Pt. Ltd." />
                    <TextFieldGroup value={formData.contactName} onChange={handleChange} info="Contact Name*" name="contactName" placeholder="e.g. join smith" />
                    <div className="number flex">
                        <TextFieldGroup value={formData.contactNumber} onChange={handleChange} info="Contact Number*" name="contactNumber" />
                        {/* <TextFieldGroup value={formData.contactNumber} onChange={handleChange} name="contactNumber" /> */}
                    </div>
                    <p>More info</p>
                    <textarea name="content" id="" cols="33" rows="10" placeholder="How can we help?">
                    </textarea>
                    <button className="submit">Submit</button>
                </div>
            }
        </>
    )
}

export default Request
