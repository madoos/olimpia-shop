import React from 'react'
import Product from '.'
import { fakeProduct } from '../../store/products/util'
import { withThemeProvider } from '../../theme/index'

export default { title: 'Product' };

export const BasicProduct = withThemeProvider(() => <Product {...fakeProduct()}/>)