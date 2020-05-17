import { GET_TRANSPORTATION, GET_TRANSPORTATION_DETAIL } from '../action/type'

const initialState = {
    transportation: {},
    transportationDetail: {}
}

const transportationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSPORTATION: {
            return {
                ...state,
                transportation: action.response
            }
        }
        case GET_TRANSPORTATION_DETAIL: {
            return {
                ...state,
                transportationDetail: action.response.data
            }
        }
        default: return state
    }
}

export default transportationReducer