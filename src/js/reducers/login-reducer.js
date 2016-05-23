import {history} from '../history'

export function doLogin(state, username,password,rememberMe){
  let user = {username:username, password:password, rememberMe:rememberMe};
  user.warn = '提示'; 
  if(username==='' || password === ''){
    user.code = 1; 
    user.visible = true;
    user.warn = '用户名或密码不能为空！';
  }
  
  return user;
}
