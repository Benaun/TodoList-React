import { useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export default function Todo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo({ text }));
            setText('')
        }
    }

    return (
        <div className="w-full h-screen bg-gray-200 pt-8">
            <div className="bg-white p-3 max-w-md mx-auto rounded-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Список дел:</h1>
                    <Input
                        value={text}
                        changeText={setText}
                        handleAction={handleAction}
                    />
                    <TodoList />
                </div>
            </div>
        </div>

    );
}