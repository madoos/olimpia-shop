import { combineReducers } from 'redux'
import { products, productsLoading } from './products/reducers'

const reducer = combineReducers({
    products, 
    productsLoading
})

export default reducer