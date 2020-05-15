import {
    GET_ERROR, CLEAR_ERROR, GET_PRODUCT_TYPES, HANDLE_PRODUCT_TYPES, GET_BRANDS,
    HANDLE_BRANDS, GET_AVAILABILITY, HANDLE_AVAILABILITY, GET_LIST_SEARCH,
    RESET_SELECT_PRODUCT_TYPES, RESET_SELECT_BRANDS, RESET_SELECT_AVAILABILITY, RESET_ALL,
    GET_NAME_SEARCH, GET_LIST_NAME_SEARCH, SEARCH_KEY, SET_DATA_SEARCH
} from './type'
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
            { id: 0, name: "Availability" },
            { id: 1, name: "Not availability" },
            { id: 2, name: "Coming soon" }
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

export const resetAll = () => dispatch => {
    let obj = {
        productType: {},
        brand: {},
        availability: {},
        dataSearch: {
            product_type_ids: [],
            brand_ids: [],
            status: [],
            from_use: "",
            to_use: "",
            from_year: "",
            to_year: ""
        },
        listSearch: []
    }

    dispatch({
        type: RESET_ALL,
        response: obj
    })
}

export const setDataSearch = (data) => async dispatch => {
    dispatch({
        type: SET_DATA_SEARCH,
        response: data
    })
}

export const getListSearchProduct = (data) => async dispatch => {
    dispatch({
        type: CLEAR_ERROR
    })
    let errors = {}
    if ((!isEmpty(data.from_use) && !isEmpty(data.to_use) && Number(data.from_use) >= Number(data.to_use))) {
        errors.running = "Invalid running hours"
    }
    if ((!isEmpty(data.from_year) && !isEmpty(data.to_year) && Number(data.from_year) >= Number(data.to_year))) {
        errors.year = "Invalid years"
    }
    if (!isEmpty(errors)) {
        dispatch({
            type: GET_ERROR,
            response: errors
        })
    }
    else {
        await axios.get("http://huasing.vinova.sg/api/v1/products?", {
            params: {
                search_key: data.search_key,
                from_use: data.from_use,
                to_use: data.to_use,
                from_year: data.from_year,
                to_year: data.to_year
            },
            body: {
                product_type_ids: data.product_type_ids,
                brand_ids: data.brand_ids,
                status: data.status
            }
        }).then(res_api => {
            dispatch({
                type: GET_LIST_SEARCH,
                response: res_api.data
            })
        })
        // history.push('/productSearchList')
        // window.location.href = '/productSearchList'
    }
}

export const getListNameSearch = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/suggests").then(res_api => {
        dispatch({
            type: GET_LIST_NAME_SEARCH,
            response: res_api.data
        })
    })
}

export const getNameSearch = (value) => async dispatch => {
    await axios.get(`http://huasing.vinova.sg/api/v1/suggests?q=${value}`).then(res_api => {
        dispatch({
            type: GET_NAME_SEARCH,
            response: res_api.data
        })
    })
}

export const searchKey = (value) => async dispatch => {
    await axios.get(`http://huasing.vinova.sg/api/v1/products?search_key=${value}`).then(res_api => {
        dispatch({
            type: SEARCH_KEY,
            response: res_api.data
        })
    })
    document.location.href = '/productSearchList'
}