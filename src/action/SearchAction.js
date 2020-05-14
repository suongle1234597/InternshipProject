import { GET_ERROR, CLEAR_ERROR, GET_PRODUCT_TYPES, GET_LIST_PRODUCT_TYPES, HANDLE_PRODUCT_TYPES, GET_BRANDS, GET_LIST_BRANDS, HANDLE_BRANDS, GET_AVAILABILITY, HANDLE_AVAILABILITY, GET_LIST_AVAILABILITY, GET_LIST_SEARCH, RESET_SELECT_PRODUCT_TYPES, RESET_SELECT_BRANDS, RESET_SELECT_AVAILABILITY } from './type'
import axios from 'axios'
import isEmpty from '../isEmpty'

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

export const resetSelectProductType = (data) => async dispatch => {
    let arr = {
        ...data,
        product_type_ids: []
    }

    dispatch({
        type: RESET_SELECT_PRODUCT_TYPES,
        response: arr
    })
}

export const selectProductTypes = (data, id) => dispatch => {
    let arr = {
        ...data,
        product_type_ids: [...data.product_type_ids, id]
    }

    dispatch({
        type: HANDLE_PRODUCT_TYPES,
        response: arr
    })
}

export const getBrands = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/brands").then(res_api => {
        dispatch({
            type: GET_BRANDS,
            response: res_api.data
        })
    }).catch(error => {

    })
}

export const resetSelectBrands = (data) => async dispatch => {
    let arr = {
        ...data,
        brand_ids: []
    }

    dispatch({
        type: RESET_SELECT_BRANDS,
        response: arr
    })
}

export const selectBrand = (data, id) => dispatch => {
    let arr = {
        ...data,
        brand_ids: [...data.brand_ids, id]
    }

    dispatch({
        type: HANDLE_BRANDS,
        response: arr
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

export const resetSelectAvailability = (data) => async dispatch => {
    let arr = {
        ...data,
        status: []
    }

    dispatch({
        type: RESET_SELECT_AVAILABILITY,
        response: arr
    })
}

export const selectAvailability = (data, id) => dispatch => {
    let arr = {
        ...data,
        status: [...data.status, id]
    }

    dispatch({
        type: HANDLE_AVAILABILITY,
        response: arr
    })
}

export const getListSearchProduct = (history, data) => async dispatch => {
    dispatch({
        type: CLEAR_ERROR
    })
    let errors = {}
    if ((isEmpty(data.from_use) && !isEmpty(data.to_use)) || (!isEmpty(data.from_use) && isEmpty(data.to_use)) || (!isEmpty(data.from_use) && !isEmpty(data.to_use) && Number(data.from_use) >= Number(data.to_use))) {
        errors.running = "Invalid running hours"
    }
    if ((isEmpty(data.from_year) && !isEmpty(data.to_year)) || ((!isEmpty(data.from_year) && isEmpty(data.to_year))) || (!isEmpty(data.from_year) && !isEmpty(data.to_year) && Number(data.from_year) >= Number(data.to_year))) {
        errors.year = "Invalid years"
    }
    if (!isEmpty(errors)) {
        dispatch({
            type: GET_ERROR,
            response: errors
        })
    }
    else {
        await axios.get("http://huasing.vinova.sg/api/v1/products?page=1", data).then(res_api => {
            dispatch({
                type: GET_LIST_SEARCH,
                response: res_api.data
            })
        })
        history.push('/listProduct')
    }
}