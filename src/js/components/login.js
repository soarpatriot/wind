
import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux' 
import { login } from '../actions/actions' 
export default class Login extends Component{
  render(){
    const {dispatch, username, password, remember, onClick } = this.props
    return (
      <div className="container home">
      <div className="sign-in">
        <form>
          <div className="input-group">
            <input type="text" className="text-input text-block" value={username}/>
          </div>
          <div className="input-group">
            <input type="password" className="text-input text-block" value={password}/>
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" value={remember}/>
              <span>记住我</span>
            </label>
          </div>
          <div className="pull-right">
            <button type="button" onClick={text => dispatch(login())} className="btn btn-blue">登录</button>
          </div>
        </form>
      </div> 
      </div>
    )
  }
}

Login.PropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}


