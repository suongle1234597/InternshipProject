import { GET_PRODUCT, GET_PRODUCT_DETAIL } from './type'
import axios from 'axios'

export const getProduct = () => async dispatch => {
    // {
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // }
    await axios.get("http://huasing.vinova.sg/api/v1/products?page=1").then(res_api => {
        console.log(res_api.data)
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