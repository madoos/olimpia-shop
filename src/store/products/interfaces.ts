export interface Product {
    name: string,
    description: string,
    photos: string[],
    price: number,
    slug: string
}

export type ProductsActionType = 'FETCHING_PRODUCTS' | 'FETCH_PRODUCTS_SUCCESS'| 'FETCH_PRODUCTS_FAILURE'

export interface FetchingProductsAction {
    type: ProductsActionType,
    payload: null
}

export interface FetchProductsSuccessAction {
    type: ProductsActionType,
    payload: Product[]
}

export interface FetchProductsFailureAction {
    type: ProductsActionType,
    payload: any
}

export type ProductAction = FetchingProductsAction | FetchProductsSuccessAction | FetchProductsFailureAction