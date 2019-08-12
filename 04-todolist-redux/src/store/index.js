


import { createStore,applyMiddleware } from 'redux'

import reducer from './reducer.js'

import thunk from 'redux-thunk'

//创建store
const store = createStore(reducer,applyMiddleware(thunk))

export default store