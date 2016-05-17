
import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'

export default class tip extends Component{
  render(){
    const { warn } = this.props
    return (
          <div>
            {warn}
          </div>
    )
  }

}



