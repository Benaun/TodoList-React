import { memo } from 'react'
import css from './Button.module.css'

export default memo (function Button({ text, onClick }) {
    return <button className={css.todo__add} onClick={onClick}> {text} </button>
});