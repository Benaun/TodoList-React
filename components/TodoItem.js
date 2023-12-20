import { useDispatch } from "react-redux"
import css from "./TodoItem.module.css"
import { toggleComplete, deleteTodo } from "../store/todoSlice/TodoSlice";

export default function TodoItem({ id, text, completed }) {
    const dispatch = useDispatch();
    return (
        <li className={css.todo__item}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleComplete({id}))}
            />
            {text}
            <button
                className={css.delete__btn}
                onClick={() => dispatch(deleteTodo({id}))}
            >
                &times;
            </button>
        </li>
    )
};