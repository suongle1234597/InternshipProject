import { GET_PRODUCT_TYPES, GET_LIST_PRODUCT_TYPES, HANDLE_PRODUCT_TYPES, GET_BRANDS, GET_LIST_BRANDS, HANDLE_BRANDS, GET_AVAILABILITY, HANDLE_AVAILABILITY, GET_LIST_AVAILABILITY, RESET_SELECTION } from './type'
import axios from 'axios'

export const getProductType = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/product_types").then(res_api => {
        const obj = {}
        res_api.data.data.forEach((item) => {
            obj[item.id] = false
        });
        dispatch({
            type: GET_PRODUCT_TYPES,
            response: res_api.data
        })
    }).catch(error => {

    })
}

export const getListProductType = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/product_types").then(res_api => {
        const obj = {}
        res_api.data.data.forEach((item) => {
            obj[item.id] = false
        });
        dispatch({
            type: GET_LIST_PRODUCT_TYPES,
            response: obj
        })
    }).catch(error => {
    })
}

export const selectProductTypes = (data, id) => dispatch => {
    let obj = {}
    if (data[id] === true) {
        obj = {
            ...data,
            [id]: false
        }
    }
    else {
        obj = {
            ...data,
            [id]: true
        }
    }
    dispatch({
        type: HANDLE_PRODUCT_TYPES,
        response: obj
    })
}

export const getBrands = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/brands").then(res_api => {
        console.log(res_api.data.data)
        dispatch({
            type: GET_BRANDS,
            response: res_api.data
        })
    }).catch(error => {

    })
}

export const getListBrands = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/brands").then(res_api => {
        const obj = {}
        res_api.data.data.forEach((item) => {
            obj[item.id] = false
        });
        dispatch({
            type: GET_LIST_BRANDS,
            response: obj
        })
    }).catch(error => {

    })
}

export const selectBrand = (data, id) => dispatch => {
    let obj = {}
    if (data[id] === true) {
        obj = {
            ...data,
            [id]: false
        }
    }
    else {
        obj = {
            ...data,
            [id]: true
        }
    }
    dispatch({
        type: HANDLE_BRANDS,
        response: obj
    })
}

export const getAvailability = () => dispatch => {
    dispatch({
        type: GET_AVAILABILITY,
        response: [
            "Availability",
            "Not availability",
            "Coming soon"
        ]
    })
}

export const getListAvailability = () => dispatch => {
    const obj = {}
    const arr = [0, 1, 2]
    arr.forEach((item) => {
        obj[item] = false
    });
    dispatch({
        type: GET_LIST_AVAILABILITY,
        response: obj
    })
}

export const selectAvailability = (data, id) => dispatch => {
    let obj = {}
    if (data[id] === true) {
        obj = {
            ...data,
            [id]: false
        }
    }
    else {
        obj = {
            ...data,
            [id]: true
        }
    }
    dispatch({
        type: HANDLE_AVAILABILITY,
        response: obj
    })
}