import { combineReducers } from 'redux'
import productReducer from './productReducer'
import transportationReducer from './transportationReducer'
import repairMaintenances from './repairMaintenancesReducer'

const rootReducer = combineReducers({
    productReducer,
    transportationReducer,
    repairMaintenances
})

export default rootReducer