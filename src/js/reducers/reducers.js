
import { combineReducers } from 'redux'
import { LOGIN } from '../actions/actions'
import { doLogin } from './login-reducer'

let info = {code:0,message:'',username:'',password:'',warn:'提示 ',visible:false}

export function operate(state=info,action){
  let username = state.username
  console.log(state); 
  console.log('username:'+ username); 
  console.log("action type:"+ action.type); 
  console.log("login:"+ LOGIN); 
  switch (action.type){
    case LOGIN:
      return doLogin(state, action.username,action.password,action.rememberMe)
    default:
      return state
  }
}

export function add(state,action) {
  return state
}
  
