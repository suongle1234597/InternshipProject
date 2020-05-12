import { GET_ERROR, CLEAR_ERROR, GET_TRANSPORTATION, GET_TRANSPORTATION_DETAIL } from './type'
import axios from 'axios'

export const getTransportation = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/transportations?page=1").then(res_api => {
        dispatch({
            type: GET_TRANSPORTATION,
            response: res_api.data
        })
    }).catch(error => {
        dispatch({
            type: GET_ERROR,
            // payload: error.dat
        })
    })
}

export const getTransportationDetail = (id) => async dispatch => {
    await axios.get(`http://huasing.vinova.sg/api/v1/transportations/${id}`).then(res_api => {
        dispatch({
            type: GET_TRANSPORTATION_DETAIL,
            response: res_api.data
        })
    }).catch(error => {
        dispatch({
            type: GET_ERROR,
            // payload: error.dat
        })
    })
}