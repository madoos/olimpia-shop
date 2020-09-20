import { Product } from '@store/products/interfaces'
import { FETCHING_PRODUCTS } from '@store/products/types'
import { fetchProductsSuccessAction } from '@store/products/actions'

import { map, delay } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { pipe, always, times } from 'ramda'

const createProduct = () : Product => {
    return {
        name: "Name",
        description: "Description",
        photos:  ['https://some-url'],
        price: 22.22,
        slug: 'ur-slug'
    }
}

const fakeProducts = times(createProduct, 10)

export const fetchProducts = pipe(
    ofType(FETCHING_PRODUCTS),
    delay(3000),
    map(always(fakeProducts)),
    map(fetchProductsSuccessAction)
)
