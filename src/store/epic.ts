import { combineEpics } from 'redux-observable'
import { fetchProducts } from './products/epics'

const epic = combineEpics(fetchProducts)

export default epic