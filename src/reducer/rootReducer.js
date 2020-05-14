import { combineReducers } from 'redux'
import productReducer from './productReducer'
import transportationReducer from './transportationReducer'
import repairMaintenancesReducer from './repairMaintenancesReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    productReducer,
    transportationReducer,
    repairMaintenancesReducer,
    searchReducer
})

export default rootReducer