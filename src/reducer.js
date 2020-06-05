export default function (state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false,
                }
            ];
        case 'remove':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo;
            });
        default:
            return state
    }
}