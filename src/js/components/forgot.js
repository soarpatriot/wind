
import React, {Component, PropTypes}  from 'react'
import { Link} from 'react-router'
export default class Forgot extends Component{
  render(){
    return (
          <p> 
        <form>
          <div className="input-group">
            <input type="text" className="text-input text-block" placeholder='用户名/邮箱/手机号码/工号' ref='username' />
          </div>
          <div className="input-group">
            <input type="password" className="text-input text-block" placeholder='密码' ref='password' />
          </div>
          <div className="input-group">
            <label>
              <input type="checkbox" ref='remember'/>
              <span>记住我</span>
            </label>
          </div>
          <div className="input-group">
            <button type="button " 
              onClick={(e)=> this.handleClick(e)} 
              className="btn btn-blue btn-block">登录</button>
          </div>
        </form>
 
            忘记密码
          </p>
    )
  }
}



