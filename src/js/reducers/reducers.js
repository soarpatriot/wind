
import { combineReducers } from 'redux'
import { LOGIN } from '../actions/actions'
import { doLogin } from './login-reducer'

function operate(state={code:0,message:'',username:'aa',password:''},action){
  let username = state.username
  console.log(state); 
  console.log('username:'+ username); 
  console.log("action type:"+ action.type); 
  console.log("login:"+ LOGIN); 
  switch (action.type){
    case LOGIN:
      return doLogin(action.info)
    default:
      return state
  }
}

const loginApp = combineReducers({
  operate 
})
  
export default loginApp
