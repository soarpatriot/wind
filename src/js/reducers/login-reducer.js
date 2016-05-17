

export function doLogin(user){
  console.log('use:'+ user.username);
  if(user.username==='' || user.password === ''){
    user.code = 1; 
    user.warn = 'blank';

    console.log('warn: '+ user.warn);
    console.log('blank: '+ user.code);
  }
  return user;
}
