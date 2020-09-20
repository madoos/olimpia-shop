import { compose } from 'ramda' 
import { connect,  } from 'react-redux'
import { pick } from 'ramda'
import ProductList from '@components/ProductList'

const enhance = compose(
    connect(pick(['products']))
)

export default enhance(ProductList)

