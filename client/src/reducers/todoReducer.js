import {
    UPDATE_TODO_STATUS,
    SET_ERROR,
    ADD_NEW_TODO,
    FETCH_TODOS_START,
    FETCH_TODOS_END
} from '../actions/types';

const INITIAL_STATE = {
    error: null,
    fetching: false,
    data: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_NEW_TODO:
            return { ...state, data: [action.payload, ...state.data] };
        case FETCH_TODOS_START:
            return { ...state, fetching: true };
        case FETCH_TODOS_END:
            return { ...state, fetching: false, data: action.payload };
        case UPDATE_TODO_STATUS:
            let newData = JSON.parse(JSON.stringify(state.data))            
            newData.forEach(todo => {
                if(todo._id === action.payload._id) {
                    todo.status = action.payload.status
                }
            });
            return { ...state, data: newData };
        case SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}