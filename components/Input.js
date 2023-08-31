import { useState, useCallback, memo, useRef } from 'react'
import Button from './Button'
import css from './Input.module.css'

export default memo(function Input({ addTodo }) {
    const
        [value, setValue] = useState(''),
        textRef = useRef(''),
        onClick = useCallback(() => addTodo(textRef.current), [addTodo]);

    textRef.current = value;

    const handleChangeInput = (event) => {
        setValue(event.currentTarget.value);
    }

    return (
        <div className={css.todo__input}>
            <input
                className={css.todo__text}
                value={value}
                onInput={handleChangeInput}
            />
            <Button text='Добавить' onClick={onClick}/>
        </div>
    )
}); 