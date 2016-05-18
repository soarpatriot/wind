
import { combineReducers } from 'redux'
import { LOGIN } from '../actions/actions'
import { doLogin } from './login-reducer'

function operate(state={code:0,message:'',username:'',password:'',warn:''},action){
  let username = state.username
  console.log(state); 
  console.log('username:'+ username); 
  console.log("action type:"+ action.type); 
  console.log("login:"+ LOGIN); 
  switch (action.type){
    case LOGIN:
      return doLogin(action.username,action.password,action.rememberMe)
    default:
      return state
  }
}

const loginApp = combineReducers({
  operate 
})
  
export default operate
