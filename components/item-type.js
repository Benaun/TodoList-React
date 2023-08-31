export function newTodo(text) {
    return { id: Math.random(), text, checked: false };
}