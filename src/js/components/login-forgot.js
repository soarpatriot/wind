
import React, {Component, PropTypes}  from 'react'
import { Link} from 'react-router'
export default class LoginForgot extends Component{
  render(){
    return (
          <p className='.clearfix'> 
            <Link to='/forgot'>忘记密码</Link>
          </p>
    )
  }
}



