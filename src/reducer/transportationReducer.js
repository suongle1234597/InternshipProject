import { GET_TRANSPORTATION } from '../action/type'

const initialState = {
    transportation: {}
}

const transportationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSPORTATION: {
            console.log(action.response.data)
            return {
                transportation: action.response.data
            }
        }
        default: return state
    }
}

export default transportationReducer