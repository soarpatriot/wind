
import React, {Component, PropTypes}  from 'react'
import { connect }  from 'react-redux'
import { LOGIN, loginAction  } from './actions/actions'
import LoginForm from './components/login-form'
import Tip from './components/tip'

export default class Login extends Component{
  render(){
    const {dispatch } = this.props
    return (
      <div className="container home">
        <div className="sign-in">
          <Tip />
          <LoginForm onLoginClick={(username,password,rememberMe)=> dispatch(loginAction(username,password,rememberMe))} />
        </div> 
      </div>
    )
  }
}




function mapStateToProps(state){
  return {
    warn: state.warn,
    code: state.code,
    message: state.message,
    name: state.username,
    password: state.password,
    remember: state.remember

  }
}


function mapDispatchToProps(dispatch){
  return {
    onLoginClick: (username,password,rememberMe)=> dispatch(loginAction(username,password,rememberMe))
  }
}

  
export default connect(
  mapStateToProps
)(Login)




