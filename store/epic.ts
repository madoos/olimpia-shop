import { combineEpics } from 'redux-observable'
import { fetchProducts } from '@store/products/epics'

const epic = combineEpics(fetchProducts)

export default epic