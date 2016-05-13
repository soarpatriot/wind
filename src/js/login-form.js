
import React, {Component, PropTypes}  from 'react'

import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect}  from 'react-redux'

class LoginForm extends Component{
  render(){
    const {username, password, remember, onLoginClick } = this.props
    return (
      <div>
        <form>
          <div class="input-group">
            <input type="text" class="text-input text-block" value={username}>
          </div>
          <div class="input-group">
            <input type="password" class="text-input text-block" value={password}>
          </div>
          <div class="remember">
            <label>
              <input type="checkbox" value={remember}>
              <span>记住我<span>
            </label>
          </div>
          <div class="pull-right">
            <button type="button" onClick={onLoginClick} class="btn btn-blue">登录</button>
          </div>
        </form>
      </div> 
    )
  }
}

LoginForm.PropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onLoginClick: PropTypes.func.isRequired
}

const loginAction = {type:'login'}

function operate(state={code:0,message:''},action){
  let count = state.count
  switch (action.type){
    case 'login':
      return action.login
    default:
      return state
  }
}

let store = createStore(operate)

function mapStateToProps(state){
  return {
    code: state.code,
    message: state.message,
    username: state.username,
    password: state.username,
    remember: state.remember

  }
}

function mapDispatchToProps(dispatch){
  return {
    onLoginClick: ()=> dispatch(loginAction)
  }
}
  
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)


ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,

  document.getElementById('root')
)
