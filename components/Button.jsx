export default function Button({ text, onClick }) {
    return (
        <button
            className="p-2 ml-4 bg-white rounded-md"
            onClick={onClick}
        >
            {text}
        </button>
    )
};