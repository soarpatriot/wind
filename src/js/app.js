
import React, {Component, PropTypes}  from 'react'
import { connect }  from 'react-redux'
//import { login  } from './actions/actions'
import Login from './components/login'

function mapStateToProps(state){
  return {
    code: state.code,
    message: state.message,
    username: state.username,
    password: state.username,
    remember: state.remember

  }
}

/**
function mapDispatchToProps(dispatch){
  return {
    onLoginClick: ()=> dispatch(login)
  }
}
**/
  
export default connect(
  mapStateToProps
)(Login)




