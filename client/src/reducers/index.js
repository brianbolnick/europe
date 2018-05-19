import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoReducer from './todoReducer';

export default combineReducers({
    routing: routerReducer,
    todos: todoReducer
});