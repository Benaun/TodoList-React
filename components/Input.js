import Button from './Button'
import css from './Input.module.css'

export default function Input({ value, changeText, handleAction }) {
    return (
        <div className={css.todo__input}>
            <input
                className={css.todo__text}
                value={value}
                onChange={(e) => changeText(e.target.value)}
            />
            <Button text='Добавить' onClick={handleAction}/>
        </div>
    )
}; 