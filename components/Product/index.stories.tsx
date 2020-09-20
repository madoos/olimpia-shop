import * as React  from 'react'
import Product from './'
import { fakeProduct } from '../../store/products/util'

export default { title: 'Product' };

export const BasicProduct = () => <Product {...fakeProduct()}/>;
