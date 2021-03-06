

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App.js'

//所有的子组件都可以拿到store
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))
