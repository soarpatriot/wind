
import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'

export default class LoginForm extends Component{
  render(){
    const {dispatch, name, username, password, remember, onLoginClick } = this.props
    return (
        <form>
          <div className="input-group">
            <input type="text" className="text-input text-block" placeholder='用户名/邮箱/手机号码/工号' ref='username' />
          </div>
          <div className="input-group">
            <input type="password" className="text-input text-block" placeholder='密码' ref='password' />
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" ref='remember'/>
              <span>记住我</span>
            </label>
          </div>
          <div className="pull-right">
            <button type="button" 
              onClick={(e)=> this.handleClick(e)} 
              className="btn btn-blue">登录</button>
          </div>
        </form>
    )
  }

  handleClick(e){
    const usernameNode = this.refs.username
    const username = usernameNode.value.trim()
    const passwordNode = this.refs.password
    const password  = passwordNode.value.trim()
    const rememberNode = this.refs.remember
    const remember = rememberNode.value.trim()
    this.props.onLoginClick(username,password,remember)
  }
}

LoginForm.PropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onLoginClick: PropTypes.func.isRequired
}


