import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React  from 'react'
import ReactDom from 'react-dom'
import {createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider}  from 'react-redux'
import App from './components/app'
import Foo from './components/foo'
import Bar from './components/bar'
import Login from './app'
import Forgot from './components/forgot'
//import Forgot from './components/forgot'
import reducers from './reducers/reducers'
import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const reducer = combineReducers({
  reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStore(
  reducer,
  DevTools.instrument()
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render(
  <Provider store={store}>
    <div>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="/forgot" component={Forgot}/>
        <Route path="/foo" component={Foo}/>
        <Route path="/bar" component={Bar}/>
      </Route>
    </Router>
    </div>
  </Provider>,

  document.getElementById('root')
)
