import { useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";
import css from './Todos.module.css'
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice/TodoSlice";

export default function Todo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAction = () => {
        if(text.trim().length) {
            dispatch(addTodo({text}));
            setText('')
        }
    }

    return (
        <div className={css.container}>
            <h2 className={css.todo__title}>Список дел:</h2>
            <Input
                value={text}
                changeText={setText}
                handleAction={handleAction}
            />
            <TodoList />
        </div>
    );
}