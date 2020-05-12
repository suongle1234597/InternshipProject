import React, { useEffect, useState } from 'react'
import './Detail.scss'
import { Link } from 'react-router-dom'
import Slide from '../Slide/Slide'
import { getTransportationDetail } from '../../action/TransportationAction'
import { getProductDetail } from '../../action/ProductAction'
import { useSelector, useDispatch } from 'react-redux'
import is_Empty from '../../isEmpty'

const Detail = props => {
    const transportationDetail = useSelector(state => state.transportationReducer.transportationDetail)
    const productDetail = useSelector(state => state.productReducer.productDetail)
    const dispatch = useDispatch()
    const type = props.match.path
    const id = props.match.params.id
    const [items, setItems] = useState([])

    useEffect(() => {
        if (type.split('/')[1] === "product") {
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
            const arr = []
            transportationDetail.images.forEach(element => {
                arr.push(<img src={element.url.original} alt="" />)
            });
            setItems(arr)
        }
        return () => {
            console.log("clean up")
        }
    }, [transportationDetail])

    useEffect(() => {
        if (!is_Empty(productDetail)) {
            const arr1 = []
            productDetail.images.forEach(element => {
                arr1.push(<img src={element.url.original} alt="" />)
            });
            setItems(arr1)
        }
        return () => {
            console.log("clean up")
        }
    }, [productDetail])

    return (
        <>
            {type.split('/')[1] === "product" ?
                <div className="detail">
                    <h6>Product Detail</h6>
                    {!is_Empty(productDetail) ?
                        <>
                            <div className="slide">
                                {items.length != 0 ?
                                    <Slide group={items} items={1} dots={true} loop={true} autoplay={true} autoplayTimeout={5000} />
                                    : ""}
                            </div>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">Brand:</th>
                                        <td>{productDetail.brand.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Model:</th>
                                        <td>{productDetail.model}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">S/No.:</th>
                                        <td>{productDetail.serial_number}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E/No.:</th>

                                        <td>{productDetail.serial_number != null ? productDetail.serial_number : "-"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Price:</th>
                                        <td>{productDetail.price != null ? <>${productDetail.price}</> : "-"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Hours:</th>
                                        <td>{productDetail.time_in_use != null ? productDetail.time_in_use : "-"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Years:</th>
                                        <td>{productDetail.year_of_produce != null ? productDetail.year_of_produce : "-"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Status:</th>
                                        {productDetail.status === "available" ?
                                            <td className="available">Available <i className="fas fa-circle"></i></td> : <td></td>}
                                        {productDetail.status === "notavailable" ?
                                            <td className="notavailable">Not Available <i className="fas fa-circle"></i></td> : <td></td>}
                                        {productDetail.status === "comingsoon" ?
                                            <td className="comingsoon">Coming soon <i className="fas fa-circle"></i></td> : <td></td>}
                                    </tr>
                                    <tr>
                                        <th scope="row">Catalog:</th>
                                        <td>{productDetail.pdf != null ? "View PDF Catalog" : "-"}</td>
                                    </tr>
                                    <tr>
                                        <th>Remarks</th>
                                    </tr>
                                </tbody>
                            </table>
                            <p>{productDetail.remark}</p>

                            <div className="contact flex">
                                <button>Call Us</button>
                                <Link to={`/requestproduct/${id}`}><button>Request for Quote</button></Link>
                            </div>
                        </>
                        : ""}
                </div>
                :
                <div className="detail">
                    <h6>Service Detail</h6>
                    {!is_Empty(transportationDetail) ?
                        <>
                            <div className="slide">
                                {items.length != 0 ?
                                    <Slide group={items} items={1} dots={true} loop={true} autoplay={true} autoplayTimeout={5000} />
                                    : ""}
                            </div>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">Brand</th>
                                        <td>{transportationDetail.brand}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Type</th>
                                        <td>{transportationDetail.transportation_type}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Weight</th>
                                        <td>{transportationDetail.weight}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Status</th>
                                        {productDetail.status === "available" ?
                                            <td className="available">Available <i className="fas fa-circle"></i></td> : <td></td>}
                                        {productDetail.status === "notavailable" ?
                                            <td className="notavailable">Not Available <i className="fas fa-circle"></i></td> : <td></td>}
                                        {productDetail.status === "comingsoon" ?
                                            <td className="comingsoon">Coming soon <i className="fas fa-circle"></i></td> : <td></td>}
                                    </tr>
                                    <tr>
                                        <th>Remarks</th>
                                    </tr>
                                </tbody>
                            </table>
                            <p>{transportationDetail.remarks}</p>

                            <div className="contact flex">
                                <button>Call Us</button>
                                <Link to={`/requestservice/${id}`}><button>Request for Quote</button></Link>
                            </div>
                        </>
                        : ""}
                </div>
            }
        </>
    )
}

export default Detail
