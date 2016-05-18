

export function doLogin( username,password,rememberMe){
  let user = {username:username,password:password, rememberMe:rememberMe}
  if(username==='' || password === ''){
    user.code = 1; 
    user.warn = '用户名或密码不能为空！';
    user.username = username;
    user.password = password; 
    //console.log('warn: '+ user.warn);
    //console.log('blank: '+ user.code);
  }
  return user;
}
