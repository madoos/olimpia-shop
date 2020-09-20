import { compose } from 'ramda' 
import { connect,  } from 'react-redux'
import { pick } from 'ramda'
import ProductPreviewList from '@components/ProductPreviewList'

const enhance = compose(
    connect(pick(['products']))
)

export default enhance(ProductPreviewList)

