
import React, {Component, PropTypes}  from 'react'
import { connect }  from 'react-redux'
import { LOGIN, loginAction  } from './actions/actions'
import LoginForm from './components/login-form'
import LoginTitle from './components/login-title'
import Tip from './components/tip'

class App extends Component{
  render(){
    const {dispatch, warn, visible} = this.props
    return (
      <div className="container home">
        <div className="sign-in">
          <LoginTitle />
          <Tip warn={warn}
               visible={visible} />
          <LoginForm onLoginClick={(username,password,rememberMe)=> dispatch(loginAction(username,password,rememberMe))} />
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




