import { GET_PRODUCT_TYPES, GET_LIST_PRODUCT_TYPES, HANDLE_PRODUCT_TYPES, GET_BRANDS, GET_LIST_BRANDS, HANDLE_BRANDS, GET_AVAILABILITY, HANDLE_AVAILABILITY, GET_LIST_AVAILABILITY } from '../action/type'

const initialState = {
    productType: {},
    listProductType: {},
    brand: {},
    listBrand: {},
    availability: {},
    listAvailability: {}
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_TYPES: {
            return {
                ...state,
                productType: action.response.data
            }
        }
        case GET_LIST_PRODUCT_TYPES: {
            return {
                ...state,
                listProductType: action.response
            }
        }
        case HANDLE_PRODUCT_TYPES: {
            return {
                ...state,
                listProductType: action.response
            }
        }
        case GET_BRANDS: {
            return {
                ...state,
                brand: action.response.data
            }
        }
        case GET_LIST_BRANDS: {
            return {
                ...state,
                listBrand: action.response
            }
        }
        case HANDLE_BRANDS: {
            return {
                ...state,
                listBrand: action.response
            }
        }
        case GET_AVAILABILITY: {
            return {
                ...state,
                availability: action.response
            }
        }
        case GET_LIST_AVAILABILITY: {
            return {
                ...state,
                listAvailability: action.response
            }
        }
        case HANDLE_AVAILABILITY: {
            return {
                ...state,
                listAvailability: action.response
            }
        }
        default: return state
    }
}

export default searchReducer