import { FETCHING_PRODUCTS } from './types'
import { fetchProductsSuccessAction } from './actions'
import { fakeProducts } from './util'

import { map, delay } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { pipe, always } from 'ramda'

export const fetchProducts = pipe(
    ofType(FETCHING_PRODUCTS),
    delay(3000),
    map(always(fakeProducts(10))),
    map(fetchProductsSuccessAction)
)
