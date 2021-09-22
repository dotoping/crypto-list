import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState())

export type RootReducerType = ReturnType<typeof rootReducer>

export default store