import { GET_ERROR, CLEAR_ERROR, GET_REPAIRMAINTENANCES } from './type'
import axios from 'axios'

export const getRepairMaintenances = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/repair_maintenances").then(res_api => {
        dispatch({
            type: GET_REPAIRMAINTENANCES,
            response: res_api.data
        })
    }).catch(error => {
        dispatch({
            type: GET_ERROR,
            // payload: error.dat
        })
    })
}