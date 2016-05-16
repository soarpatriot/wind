
import React  from 'react'

import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider}  from 'react-redux'
import loginApp from './reducers/reducers'
import App from './app'

let store = createStore(loginApp)

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,

  document.getElementById('root')
)
