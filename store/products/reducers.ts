import { Product, ProductAction } from '@store/products/interfaces'
import { FETCHING_PRODUCTS ,FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '@store/products/types'

export const products = (productsState: Product[], action: ProductAction): Product[] => {
    switch(action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return productsState.concat(action.payload)
        default:
            return []
    }
}

export const productsLoading = (productsLoadingState: boolean, action: ProductAction): boolean => {
    switch(action.type) {
        case FETCHING_PRODUCTS:
            return true
        case FETCH_PRODUCTS_SUCCESS:
        case FETCH_PRODUCTS_FAILURE:
            return false
        default:
            return false
    }
}