
import React, {Component, PropTypes}  from 'react'
import { connect }  from 'react-redux'
import { LOGIN, loginAction  } from './actions/actions'
import LoginForm from './components/login-form'
import Tip from './components/tip'

class App extends Component{
  render(){
    const {dispatch, warn} = this.props
    return (
      <div className="container home">
        <div className="sign-in">
          <Tip warn={warn} />
          <LoginForm onLoginClick={(username,password,rememberMe)=> dispatch(loginAction(username,password,rememberMe))} />
        </div> 
      </div>
    )
  }
}

App.PropTypes = {
  warn: PropTypes.string.isRequired
}




function select(state){
  console.log('state: '+ state.username)
  return {
    warn: state.warn

  }
}


function mapDispatchToProps(dispatch){
  return {
    onLoginClick: (username,password,rememberMe)=> dispatch(loginAction(username,password,rememberMe))
  }
}

  
export default connect(select)(App)




