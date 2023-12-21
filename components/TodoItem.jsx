import { useDispatch } from "react-redux"
import { toggleComplete, deleteTodo } from "../store/todoSlice/todoSlice";

export default function TodoItem({ id, text, completed }) {
    const dispatch = useDispatch();
    return (
        <li className={!completed
            ? "flex items-center justify-between bg-white rounded-md px-3 py-2.5 my-3"
            : "flex items-center justify-between bg-lime-400 rounded-md px-3 py-2.5 my-3"}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleComplete({ id }))}
            />
            {text}
            <button
                className="ml-3 border-0 bg-red-400 rounded-md px-1 py-0.25"
                onClick={() => dispatch(deleteTodo({ id }))}
            >
                &times;
            </button>
        </li>
    )
};