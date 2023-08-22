import { useState } from "react";
import css from './TodoList.module.css'

export default function TodoList() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    function handelChangeInput(event) {
        setValue(event.target.value);
    }

    function addTodo() {
        const newTodo = {
            text: value
        };
        setTodos([...todos, newTodo]);
        setValue("");
    }

    function deleteTodo(index) {
        const updateTodos = [...todos];
        updateTodos.splice(index, 1);
        setTodos(updateTodos);
    }

    return (
        <div className={css.container}>
            <h2 className={css.todo__title}>Список дел:</h2>
            <div className={css.todo__input}>
                <input
                    className={css.todo__text}
                    type="text"
                    value={value}
                    onInput={handelChangeInput}
                />
                <button
                    className={css.todo__add}
                    onClick={addTodo}
                >
                    Добавить
                </button>
            </div>

            <ul className={css.todo__items}>
                {todos.map((todo, index) => (
                    <li className={css.todo__item} key={index}>
                        {todo.text}
                        <button className={css.delete__btn} onClick={() => deleteTodo(index)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}