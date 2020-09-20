import React from 'react';
import withRouter from '../../HOC/withRouter'
import { compose } from 'ramda'
import Navbar from '../../components/Navbar'

const Product = ({ query }) => {
    return (
        <div>
            <Navbar/>
            <h1>Product: {query.id}</h1>
        </div>
    );
}

const enhance = compose(withRouter)
 
export default enhance(Product);