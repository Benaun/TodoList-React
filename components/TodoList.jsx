import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux';

export default function TodoList() {
    const todos = useSelector(state => state.todos.todos);
    return <div className="mt-8">
        {
            todos.length > 0 ?
                <ul>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                        />
                    ))}
                </ul>
                : <h2 className=" text-2xl mb-2">Список дел пуст</h2>
        }
    </div>

}