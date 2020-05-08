import { GET_REPAIRMAINTENANCES } from '../action/type'

const initialState = {
    repairMaintenances: {}
}

const repairMaintenancesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPAIRMAINTENANCES: {
            return {
                repairMaintenances: action.response
            }
        }
        default: return state
    }
}

export default repairMaintenancesReducer