import { GET_PRODUCT, GET_PRODUCT_DETAIL, SORT } from './type'
import axios from 'axios'

export const getProduct = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/products?page=1").then(res_api => {

        dispatch({
            type: GET_PRODUCT,
            response: res_api.data
        })
    }).catch(error => {
        // dispatch({
        //     type: GET_ERROR,
        //     payload: "null"
        // })
    })
}

export const getProductDetail = (id) => async dispatch => {
    await axios.get(`http://huasing.vinova.sg/api/v1/products/${id}`).then(res_api => {
        dispatch({
            type: GET_PRODUCT_DETAIL,
            response: res_api.data
        })
    }).catch(error => {

    })
}

export const sortProduct = (sort, key) => async dispatch => {
    await axios.get(`http://huasing.vinova.sg/api/v1/products?sort=${sort}&sort_key=${key}`).then(res_api => {
        dispatch({
            type: SORT,
            response: res_api.data
        })
    })
}