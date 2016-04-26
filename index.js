
import React, {Component, PropTypes}  from 'react'

import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect}  from 'react-redux'

class Counter extends Component{
  render(){
    const {value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div> 
    )
  }
}

Counter.PropTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

const increaseAction = {type:'increase'}

function counter(state={count:0},action){
  let count = state.count
  switch (action.type){
    case 'increase':
      return {count: count+1}
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