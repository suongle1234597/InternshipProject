import React, { useState, useEffect } from 'react'
import './ListImg.scss'
import Modal from '../Modal/Modal'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'
import is_Empty from '../../isEmpty'
import Button from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { getTransportation } from '../../action/TransportationAction'
import { getRepairMaintenances } from '../../action/RepairMaintenancesAction'
import isEmpty from '../../isEmpty'

const ListImg = props => {
    const transportation = useSelector(state => state.transportationReducer.transportation)
    const repairMaintenances = useSelector(state => state.repairMaintenancesReducer.repairMaintenances)
    const dispatch = useDispatch()
    const type = props.match.path
    const id = props.match.params.id
    const [itemsForRepairMaintenances, setItemsForRepairMaintenances] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        if (type.split('/')[1] === "listService") {
            dispatch(getTransportation())
        }
        else {
            dispatch(getRepairMaintenances())
        }
        return () => {
            console.log("clean up")
        }
    }, [])

    useEffect(() => {
        if (!is_Empty(repairMaintenances)) {
            var array = []
            repairMaintenances.forEach(item => {
                if (Number(item.id) === Number(id)) {
                    item.images.forEach(image => {
                        array.push(image.url.original)
                    });
                    setName(item.name)
                    setItemsForRepairMaintenances(array)
                }
                return
            });
        }
        return () => {
            console.log("clean up")
        }
    }, [repairMaintenances])

    useEffect(() => {
        console.log(transportation)
        // return () => {
        //     console.log("clean up")
        // }
    }, [transportation])

    const handleClickImage = (item) => {
        props.setOptionsModal([<img src={item} alt="" />])
        props.handleClickShowModal()
    }

    return (
        <>
            {type.split('/')[1] === "listService" ?
                <div className="listProduct listimg">
                    <div className="head flex">
                        <Link to='/'><button className="done flex" >
                            <i className="fas fa-chevron-left"></i>
                            Back
                        </button> </Link>
                        <h6>Services</h6>
                    </div>
                    <div className="listProduct-under flex">
                        <p> {!isEmpty(transportation) && transportation.metadata.total_count} Results</p>
                    </div>

                    <div className="showProduct flex">
                        {!isEmpty(transportation.data) ? transportation.data.map(item => <Product key={item.id} domain="service" id={item.id} img={item.images[0].url.original} name={item.transportation_type} price={item.weight} />) : "No equipment for rent"}
                        <Product key={1} domain="service" id={1} img="https://1.bp.blogspot.com/-a-GO0cVmnuE/XcWkLlMcWrI/AAAAAAAATMY/3QfOrHzXeYoRS7qMAzVCa8BrHAwnmCncQCLcBGAsYHQ/s1600/hinh-anh-hot-girl-xinh-han-quoc-wap102-com%2B%25281%2529.jpg" name="ytyty" price="25 tan" />
                    </div>
                    <div className="footer">
                        <Link to="/">Hove more Questions?</Link>
                        <Button className="view" link="/" name="Call us" />
                    </div>
                </div>
                :
                <div className="listProduct listimg">
                    <div className="head flex">
                        <Link to='/'><button className="done flex" >
                            <i className="fas fa-chevron-left"></i>
                            Back
                    </button></Link>
                        <h6>{!isEmpty(name) && name}</h6>
                    </div>
                    <div className="listProduct-under flex">
                        <p>{!is_Empty(itemsForRepairMaintenances) && itemsForRepairMaintenances.length} Pictures</p>
                    </div>

                    <div className="showProduct flex">
                        {!is_Empty(itemsForRepairMaintenances) && itemsForRepairMaintenances.map((item, index) =>
                            <div key={index} onClick={() => handleClickImage(item)} className="item" >
                                <img src={item} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="footer">
                        <Link to="/">Hove more Questions?</Link>
                        <Button className="view" link="/" name="Call us" />
                    </div>
                </div>
            }
        </>
    )
}

export default ListImg
