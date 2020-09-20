import { combineReducers } from 'redux'
import { products, productsLoading } from '@store/products/reducers'

const reducer = combineReducers({
    products, 
    productsLoading
})

export default reducer