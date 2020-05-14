import { combineReducers } from 'redux'
import productReducer from './productReducer'
import transportationReducer from './transportationReducer'
import repairMaintenancesReducer from './repairMaintenancesReducer'
import searchReducer from './searchReducer'
import errorReducer from './errorReducer'
import bannerReducer from './bannerReducer'

const rootReducer = combineReducers({
    productReducer,
    transportationReducer,
    repairMaintenancesReducer,
    searchReducer,
    errorReducer,
    bannerReducer
})

export default rootReducer