import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            });
        },
        toggleComplete(state, action) {
            const currentTodo = state.todos.find(todo => todo.id === action.payload.id);
            currentTodo.completed = !currentTodo.completed;
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;