import { GET_BANNER } from '../action/type'

const initialState = {
    banners: []
}

const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER: {
            return {
                banners: action.response
            }
        }
        default: return state
    }
}

export default bannerReducer