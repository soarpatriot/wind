
import { combineReducers } from 'redux'
import { LOGIN } from '../actions/actions'

function operate(state={code:0,message:''},action){
  //let count = state.count
  switch (action.type){
    case LOGIN:
      return state 
    default:
      return state
  }
}

const loginApp = combineReducers({
  operate 
})
  
export default loginApp
