import { GET_PRODUCT_TYPES, GET_LIST_PRODUCT_TYPES, HANDLE_PRODUCT_TYPES, GET_BRANDS, GET_LIST_BRANDS, HANDLE_BRANDS, GET_AVAILABILITY, HANDLE_AVAILABILITY, GET_LIST_AVAILABILITY, GET_LIST_SEARCH, RESET_SELECT_PRODUCT_TYPES, RESET_SELECT_BRANDS, RESET_SELECT_AVAILABILITY } from '../action/type'

const initialState = {
    productType: {},
    brand: {},
    availability: {},
    dataSearch: {
        product_type_ids: [],
        brand_ids: [],
        status: [],
        from_use: "",
        to_use: "",
        from_year: "",
        to_year: ""
    },
    listSearch: []
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_TYPES: {
            return {
                ...state,
                productType: action.response.data
            }
        }
        case HANDLE_PRODUCT_TYPES: {
            return {
                ...state,
                dataSearch: action.response
            }
        }
        case RESET_SELECT_PRODUCT_TYPES: {
            return {
                ...state,
                dataSearch: action.response
            }
        }
        case GET_BRANDS: {
            return {
                ...state,
                brand: action.response.data
            }
        }
        case RESET_SELECT_BRANDS: {
            return {
                ...state,
                dataSearch: action.response
            }
        }
        case HANDLE_BRANDS: {
            return {
                ...state,
                dataSearch: action.response
            }
        }
        case GET_AVAILABILITY: {
            return {
                ...state,
                availability: action.response
            }
        }
        case RESET_SELECT_AVAILABILITY: {
            return {
                ...state,
                dataSearch: action.response
            }
        }
        case HANDLE_AVAILABILITY: {
            return {
                ...state,
                dataSearch: action.response
            }
        }
        case GET_LIST_SEARCH: {
            return {
                ...state,
                listSearch: action.response.data
            }
        }
        default: return state
    }
}

export default searchReducer