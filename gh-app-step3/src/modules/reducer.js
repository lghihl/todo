import { v4 as uuid } from 'uuid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actions";

const initialState = {
    todos: [
        {
            id: uuid(),
            text: '공부하기',
            checked: true,
        },
        {
            id: uuid(),
            text: '퇴사하기',
            checked: false,
        },
        {
            id: uuid(),
            text: '재취업하기',
            checked: false,
        },
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return {
                todos: [
                    ...state.todos,
                    action.todo,
                ],
            };

        case TOGGLE_TODO: 
            return {
                todos: [...state.todos.map(todo => {
                    if(todo.id === action.id) {
                        todo.checked = !todo.checked
                    }
                    return todo;
                })],
            };

        case DELETE_TODO: 
            return {
                todos: [...state.todos.filter(todo => todo.id !== action.id)],
            };
        
        default:
            return state;
    }
}