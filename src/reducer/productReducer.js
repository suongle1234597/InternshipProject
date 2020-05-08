import { GET_PRODUCT, GET_PRODUCT_DETAIL } from '../action/type'

const initialState = {
    product: {},
    productDetail: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT: {
            return {
                product: action.response.data
            }
        }
        case GET_PRODUCT_DETAIL: {
            return {
                product: action.response
            }
        }
        default: return state
    }
}

export default productReducer