import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'
import LoginForm from './login-form'
import { connect }  from 'react-redux'

export default class Login extends Component{
  render(){
    return (
      <div className="container home">
        <div className="sign-in">
          <LoginForm onLoginClick = />
        </div> 
      </div>
    )
  }
}



