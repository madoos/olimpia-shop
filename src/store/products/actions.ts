import { 
    Product,
    FetchingProductsAction,
    FetchProductsSuccessAction,
    FetchProductsFailureAction 
 } from './interfaces'

import { FETCHING_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './types'

export const fetchingProductsAction = () : FetchingProductsAction => ({
    type: FETCHING_PRODUCTS,
    payload: null
})

export const fetchProductsSuccessAction = (products: Product[]): FetchProductsSuccessAction => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchProductsFailureAction = (error: any): FetchProductsFailureAction => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
})