import css from './TodoList.module.css';
import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux';

export default function TodoList() {
    const todos = useSelector(state => state.todos.todos);
    return (
        <ul className={css.todo__items}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            ))}
        </ul>
    )
}