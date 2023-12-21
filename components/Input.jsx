import Button from './Button'

export default function Input({ value, changeText, handleAction }) {
    return (
        <div className="relative mx-auto pb-3">
            <input
                className="rounded-sm py-1.5 pr-6 pl-1.5 bg-slate-100 border-solid border-2 border-white w-64"
                value={value}
                onChange={(e) => changeText(e.target.value)}
            />
            <Button text='Добавить' onClick={handleAction}/>
        </div>
    )
}; 