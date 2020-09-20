import React from 'react';
import { Product as ProductInterface} from '@store/products/interfaces'
 
const Product: React.FunctionComponent<ProductInterface> = ({ name, description, slug, price }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{slug}</p>
        </div>
    );
}
 
export default Product;