
import React, {Component, PropTypes}  from 'react'

import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect}  from 'react-redux'

import Counter from './counter.js'


const increaseAction = {type:'increase'}

function counter(state={count:0},action){
  let count = state.count
  switch (action.type){
    case 'increase':
      return {count: count+2}
    default:
      return state
  }
}

let store = createStore(counter)

function mapStateToProps(state){
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch){
  return {
    onIncreaseClick: ()=> dispatch(increaseAction)
  }
}
  
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,

  document.getElementById('root')
)
