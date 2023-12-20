import css from './Button.module.css'

export default function Button({ text, onClick }) {
    return (
        <button
            className={css.todo__add}
            onClick={onClick}
        >
            {text}
        </button>
    )
};