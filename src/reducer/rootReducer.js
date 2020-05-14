import { combineReducers } from 'redux'
import productReducer from './productReducer'
import transportationReducer from './transportationReducer'
import repairMaintenancesReducer from './repairMaintenancesReducer'
import searchReducer from './searchReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
    productReducer,
    transportationReducer,
    repairMaintenancesReducer,
    searchReducer,
    errorReducer
})

export default rootReducer