import React from 'react'
import ProductPreview from '.'
import { fakeProduct } from '../../store/products/util'
import { withThemeProvider } from '../../theme/index'

export default { title: 'ProductPreview' };

export const BasicProduct = withThemeProvider(() => <ProductPreview {...fakeProduct()}/>)