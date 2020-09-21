import { Product } from '@store/products/interfaces'
import { fakeProducts } from '@store/products/util'

export const getPaginated = (page: number, n: number) : Promise<Product[]> => {
    return Promise.resolve(fakeProducts(n))
}

const products = {
    getPaginated
}

export default products