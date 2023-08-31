import css from './TodoList.module.css';
import TodoItem from "./TodoItem";

export default function TodoList({todos, checkedTodo, deleteTodo}) {
    return (
        <ul className={css.todo__items}>
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    checkedTodo={checkedTodo} 
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}