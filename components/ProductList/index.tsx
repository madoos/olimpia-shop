import * as React from 'react';
import { Product as ProductInterface } from '@store/products/interfaces'
import { map } from 'ramda'
import Product from '@components/Product'

interface ProductListInterface {
    products: ProductInterface[]
}

const ProductList: React.FunctionComponent<ProductListInterface> = ({ products }) => {
    return ( 
        <div className="product-list">
        {map(product => <Product {...product}/>, products)}
        {JSON.stringify(products)}
        </div> 
    );
}
 
export default ProductList;