import {addTodoReducer} from './addtodo'
import {combineReducers} from 'redux'
//import {TodoReducer} from "./todoList";

const rootReducer = combineReducers({addTodoReducer});

export default rootReducer