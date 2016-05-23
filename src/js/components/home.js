import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'
import { Link} from 'react-router'

export default class Home extends Component{
  render(){
    return (
          <p className='clearfix'> 
            <Link className='link' to='/forgot'>Home</Link>
          </p>
    )
  }
}



