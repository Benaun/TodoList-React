import { useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice/todoSlice";

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
        <div className="flex flex-wrap items-center justify-between rounded-lg p-2 bg-gray-400 w-3/5 border-solid border-2 border-gray-300">
            <h2 className="my-0 mx-auto pb-8 text-white text-7xl">Список дел:</h2>
            <Input
                value={text}
                changeText={setText}
                handleAction={handleAction}
            />
            <TodoList />
        </div>
    );
}