import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'
import { Link} from 'react-router'
import  Top  from './home/top'
import  Left  from './home/left'
export default class Home extends Component{
  render(){
    return (
      <div className='home-container'>
        <Left />
        <Top />

      </div>
    )
  }
}



