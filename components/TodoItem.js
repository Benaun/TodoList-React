import { memo, useCallback } from "react";
import css from "./TodoItem.module.css"

export default memo(function TodoItem({ todo, checkedTodo, deleteTodo }) {
    const { id, checked, text } = todo;
    const onClick = useCallback(() => deleteTodo(id), [deleteTodo, id]);
    
    return (
        <li className={css.todo__item}>
            <input type="checkbox" checked={checked} onChange={()=> checkedTodo(id)}/>
            {text}
            <button className={css.delete__btn} onClick={onClick}>
                X
            </button>
        </li>
    )
});