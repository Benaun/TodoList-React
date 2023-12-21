import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux';

export default function TodoList() {
    const todos = useSelector(state => state.todos.todos);
    return <>
        {
            todos.length > 0 ?
                <ul className="mx-auto w-3/4 list-none">
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                        />
                    ))}
                </ul>
                : <div className="flex mx-auto pb-8 text-white text-4xl">Список задач пуст</div>
        }
    </>

}