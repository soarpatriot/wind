
import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'
import  Nav  from './nav'

export default class Left extends Component{
  render(){
    return (
          <div className='left'>
            <div className='menu-title'>
              风云
            </div>
            <Nav /> 
          </div>

    )
  }
}



