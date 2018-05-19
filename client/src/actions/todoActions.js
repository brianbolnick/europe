import {
    UPDATE_TODO_STATUS,
    SET_ERROR,
    ADD_NEW_TODO,
    FETCH_TODOS_START, 
    FETCH_TODOS_END
} from './types';
import { API_URL } from '../tools/api-config';
import axios from 'axios';
const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }

export const toggleTodoStatus = (id) => (dispatch, getState) => {    
    axios.put(`${API_URL}/api/todos/${id}`, {}, config).then(response => {
        if (response.data.error) {
            console.log("found error updating todo: ", response.data.error)
            dispatch({
                type: SET_ERROR,
                message: "There was an issue updating the todo item."
            })
        } else {
            console.log(response.data)
            dispatch({
                type: UPDATE_TODO_STATUS,
                payload: response.data
            })
        }
    }).catch(error => {
        console.log(error)
        dispatch({
            type: SET_ERROR,
            message: "There was an issue updating the todo item."
        })
    })
}

export const addNewTodo = (data) => (dispatch, getState) => {        
    axios.post(`${API_URL}/api/todos`, data, config).then(response => {
        if (response.data.error) {
            console.log("found error creating todo: ", response.data.error)
            dispatch({
                type: SET_ERROR,
                message: "There was an issue creating the todo item."
            })
        } else {
            dispatch({
                type: ADD_NEW_TODO,
                payload: response.data
            })
        }
    }).catch(error => {
        console.log(error)
        dispatch({
            type: SET_ERROR,
            message: "There was an issue creating the todo item."
        })
    })
}

export const fetchTodos = () => (dispatch, getState) => {
    dispatch({ type: FETCH_TODOS_START })
    axios.get(`${API_URL}/api/todos`).then(response => {
        if (response.data.error) {
            console.log("found error creating todo: ", response.data.error)
            dispatch({
                type: SET_ERROR,
                message: "There was an issue fetching todos."
            })
        } else {
            dispatch({
                type: FETCH_TODOS_END,
                payload: response.data
            })
        }
    }).catch(error => {
        console.log(error)
        dispatch({
            type: SET_ERROR,
            message: "There was an issue fetching todos."
        })
    })
}