import * as React from 'react';
import { Product as ProductInterface } from '@store/products/interfaces'
import { map } from 'ramda'
import ProductPreview from '@components/ProductPreview'

interface ProductListInterface {
    products: ProductInterface[]
}

const ProductPreviewList: React.FunctionComponent<ProductListInterface> = ({ products }) => {
    return ( 
        <div className="product-list">
            {map(product => <ProductPreview {...product} key={product.slug}/>, products)}
        </div> 
    );
}
 
export default ProductPreviewList;