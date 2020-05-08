import { combineReducers } from 'redux'
import productReducer from './productReducer'
import transportationReducer from './transportationReducer'

const rootReducer = combineReducers({
    productReducer,
    transportationReducer
})

export default rootReducer