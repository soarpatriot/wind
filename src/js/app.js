
import React, {Component, PropTypes}  from 'react'
import { connect }  from 'react-redux'
import { LOGIN, loginAction  } from './actions/actions'
import LoginForm from './components/login-form'
import LoginTitle from './components/login-title'
import LoginForgot from './components/login-forgot'
import Tip from './components/tip'

class App extends Component{
  render(){
    const {dispatch, warn, visible} = this.props
    return (
      <div className='login-back'>
      <div className="container home">
        <div className="sign-in">
          <Tip warn={warn}
               visible={visible} />
          <LoginForm onLoginClick={(username,password,rememberMe)=> dispatch(loginAction(username,password,rememberMe))} />
          <LoginForgot />
        </div> 
      </div>
      </div>
    )
  }
}

App.PropTypes = {
  warn: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
}




function select(state){
  console.log('state: '+ state.warn)
  return {
    warn: state.warn,
    visible: state.visible

  }
}


function mapDispatchToProps(dispatch){
  return {
    onLoginClick: (username,password,rememberMe)=> dispatch(loginAction(username,password,rememberMe))
  }
}

  
export default connect(select)(App)




