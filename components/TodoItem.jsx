import { useDispatch } from "react-redux"
import { toggleComplete, deleteTodo } from "../store/todoSlice";
import Button from "./Button";

export default function TodoItem({ id, text, completed }) {
    const dispatch = useDispatch();
    return (
        <li className={!completed
            ? "p-2 bg-white rounded-lg"
            : "p-2 bg-lime-400 rounded-lg"}>
            <div className="flex align-middle flex-row justify-between">
                <div className="p-2">
                    <input
                        className=" h-6 w-6"
                        type="checkbox"
                        checked={completed}
                        onChange={() => dispatch(toggleComplete({ id }))}
                    />
                </div>
                <div className="p-2">
                    <p className="text-lg text-black">
                        {text}
                    </p>
                </div>

                <Button
                    className="text-red-500 border-2 border-red-500 px-3 rounded-lg"
                    onClick={() => dispatch(deleteTodo({ id }))}
                    text={"X"}
                />      
            </div>

        </li>
    )
};
