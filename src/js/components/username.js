import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux' 

export default class Username extends Component{
  render(){
    const {dispatch, name, username, password, remember, onLoginClick } = this.props
    return (
      <div className="container home">
        <span>{name}</span>
      <div className="sign-in">
        <form>
          <div className="input-group">
            <input type="text" className="text-input text-block" value={name} />
          </div>
          <div className="input-group">
            <input type="password" className="text-input text-block" value={password} />
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" value={remember}/>
              <span>记住我</span>
            </label>
          </div>
          <div className="pull-right">
            <button type="button" 
              onClick={onLoginClick} 
              className="btn btn-blue">登录</button>
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
  onLoginClick: PropTypes.func.isRequired
}


