
export const LOGIN = 'LOGIN';

export function loginAction(username,password,rememberMe){
  console.log('username action :  '+ username);
  console.log('username action :  '+ password);
  var user = {
    username: username,
    password: password,
    rememberMe: rememberMe
  }
  return {type: LOGIN , username,password, rememberMe};
}
