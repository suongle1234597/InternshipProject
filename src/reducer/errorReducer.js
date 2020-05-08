import { GET_ERROR, CLEAR_ERROR } from '../action/type'

const initialState = {
    errors: {}
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERROR: {
            return {
                errors: action.payload
            }
        }
        case CLEAR_ERROR: {
            return {
                errors: {}
            }
        }
        default: return state
    }
}