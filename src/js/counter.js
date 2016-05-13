
import React, {Component, PropTypes}  from 'react'
export default class Counter extends Component{
  render(){
    const {value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increas</button>

      </div> 
    )
  }
}

Counter.PropTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

