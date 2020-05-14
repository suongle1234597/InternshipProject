import { GET_BANNER } from '../action/type'
import axios from 'axios';

export const getBanner = () => async dispatch => {
    await axios.get("http://huasing.vinova.sg/api/v1/banners").then(res_api => {
        dispatch({
            type: GET_BANNER,
            response: res_api.data.data
        })
    })
}