import { v4 as uuid } from 'uuid';

export const ADD_TODO = "todo-list/ADD_TODO";
export const TOGGLE_TODO = "todo-list/TOGGLE_TODO";
export const DELETE_TODO = "todo-list/DELETE_TODO";

export const add_todo = (todo) => {
    return {
        type: ADD_TODO,
        todo: {
            id: uuid(),
            text: todo.text,
            checked: todo.checked,
        }
    }
}

export const toggle_todo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const delete_todo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}