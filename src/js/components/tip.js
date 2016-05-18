
import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'

export default class Tip extends Component{
  render(){
    const { warn, visible} = this.props
    return (
          <div className='alert alert-danger'
            style={{
              visibility: visible? 'visible': 'hidden' 
           }}>
            {warn}
          </div>
    )
  }

}

Tip.PropTypes = {
  warn: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
}


