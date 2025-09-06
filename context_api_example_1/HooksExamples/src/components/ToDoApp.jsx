import { useReducer, useState } from "react";


function toDoRenducer(state, action) {
    switch (action.type) {
        case "add" :
            return [...state, { id: Date.now(), text: action.text }];
        case "remove":
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;        
    }
}

export default function TodoApp() {
    const [todos, dispatch] = useReducer(toDoRenducer, []);
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim() === "") return;
        dispatch({type: "add", text});
        setText("");

    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value) }
                placeholder="Enter todo"
            />

            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map((todo) =>  (
                    <li key={todo.id}>
                         {todo.text} {" "}
                         <button onClick={() => dispatch({ type: "remove", id: todo.id })} > X </button>
                    </li>                                    
                ))}
            </ul>
        </div>
    );
}




