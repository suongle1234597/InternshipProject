import { GET_PRODUCT, GET_PRODUCT_DETAIL, SORT, GET_PRODUCT_FOR_RENT, GET_LIST_SEARCH_FOR_SALE, GET_PRODUCT_FOR_SALE } from '../action/type'

const initialState = {
    product: {},
    productDetail: {},
    sort: {
        asc: "asc",
        desc: "desc"
    },
    sort_key: {
        time_in_use: "time_in_use",
        year_of_produce: "year_of_produce",
        created_at: "created_at"
    },
    productForRent: [],
    productForSale: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT: {
            return {
                ...state,
                product: action.response
            }
        }
        case GET_PRODUCT_DETAIL: {
            return {
                ...state,
                productDetail: action.response.data
            }
        }
        case SORT: {
            return {
                ...state,
                product: action.response
            }
        }
        case GET_PRODUCT_FOR_RENT: {
            return {
                ...state,
                productForRent: action.response
            }
        }
        case GET_PRODUCT_FOR_SALE: {
            return {
                ...state,
                productForSale: action.response
            }
        }
        default: return state
    }
}

export default productReducer