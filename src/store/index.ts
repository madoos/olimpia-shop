import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger'
import { merge, isNil } from 'ramda'

import epic from './epic'
import reducer from './reducer'

let store

const createCustomStore = (initialState) => {
    const logger = createLogger({ collapsed: true })
    const epicMiddleware = createEpicMiddleware()
    const reduxMiddleware = applyMiddleware(epicMiddleware, logger)
    const store = createStore(reducer, initialState, reduxMiddleware)
    epicMiddleware.run(epic)
    return store
}

const initializeStore = (preloadedState) => {
    let _store = store ?? createCustomStore(preloadedState)
  
    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
      const state = store.getState()
      _store = createCustomStore(merge(state, preloadedState))
      store = undefined // Reset the current store
    }

    if (isNil(window)) return _store // For SSG and SSR always create a new store
    if (!store) store = _store // Create the store once in the client
    return _store
}

export const useStore = (initialState) => useMemo(() => createCustomStore(initialState), [initialState])
  