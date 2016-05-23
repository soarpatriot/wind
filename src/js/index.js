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
import Home from './components/home'
import Login from './app'
import Forgot from './components/forgot'
import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import { store, history } from './history'

// Create an enhanced history that syncs navigation events with the store

ReactDom.render(
  <Provider store={store}>
  { /* Tell the Router to use our enhanced history */ } 
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="forgot" component={Forgot}/>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
        <Route path="home" component={Home}/>
      </Route>
    </Router>
  </Provider>,

  document.getElementById('root')
)
