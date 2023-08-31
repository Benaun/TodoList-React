import { useState, useCallback } from "react";
import Input from "./Input";
import TodoList from "./TodoList";
import { newTodo } from "./item-type";
import css from './Todos.module.css'

export default function Todo() {
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback((newTodoText) => {
        setTodos([...todos, newTodo(newTodoText)])
    });

    const deleteTodo = useCallback((id) => {
        const updateTodos = [...todos];
        updateTodos.splice(id, 1);
        setTodos(updateTodos);
    });

    const checkedTodo = useCallback((id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    });

    return (
        <div className={css.container}>
            <h2 className={css.todo__title}>Список дел:</h2>
            <Input addTodo={addTodo} />
            <TodoList todos={todos} checkedTodo={checkedTodo} deleteTodo={deleteTodo} />
        </div>
    );
}