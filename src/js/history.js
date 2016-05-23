
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'
import React  from 'react'
import {createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider}  from 'react-redux'
import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from './reducers/reducers'

import { routerMiddleware, push } from 'react-router-redux' 
const middleware = routerMiddleware(browserHistory)

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const reducer = combineReducers({
  reducers,
  routing: routerReducer
})



export const store = createStore(
  reducer,
  DevTools.instrument(),
  applyMiddleware(middleware)
)

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store)


