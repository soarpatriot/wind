
import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'

export default class Tip extends Component{
  render(){
    const { warn } = this.props
    return (
          <div>
            {warn}
          </div>
    )
  }

}

Tip.PropTypes = {
  warn: PropTypes.string.isRequired
}


