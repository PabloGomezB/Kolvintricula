import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => setTodos([...todos, todo]);
    // useEffect(() => {
    //     effect;
    //     return () => {
    //         cleanup;
    //     };
    // }, [input]);
    const deleteTodo = (todo) => {
        let index = todos.indexOf(todo);
        todos.splice(index, 1);
        setTodos([...todos]);
    };
    return (
        <React.Fragment>
            <label>
                Tarea:
                <input type="text" id="input-todo"></input>
            </label>
            <button
                onClick={() =>
                    addTodo(document.getElementById("input-todo").value)
                }
            >
                Añadir tarea
            </button>
            <ul>
                {todos.map((t) => (
                    <div>
                        <li key={t}>{t}</li>
                        <p onClick={() => deleteTodo(t)}>Eliminar</p>
                    </div>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default App;
