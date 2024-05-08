import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [description, setCountDescription] = useState("");
  const [title, setTitle] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const descriptionChange = (event) => {
    setCountDescription(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== "" && description.trim() !== "") {
      const newTodo = { title: title, description: description };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTitle("");
      setCountDescription("");
    }
  };
  const deleteTodo = (index) => {
    const updateTodos = todos.filter((_, ind) => {
      ind !== index;
    });
    setTodos(updateTodos);
  };
  return (
    <>
      <div>
        <form onSubmit={formSubmit}>
          <label>title</label>
          <input value={title} onChange={titleChange} />
          <br />
          <br />
          <label>description</label>
          <input value={description} onChange={descriptionChange} />
          <br />
          <br />
          <button type="submit">create a new todo</button>
        </form>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <div key={index}>
            <li>{todo.title}</li>
            <li>{todo.description}</li>
            <button onClick={() => deleteTodo(index)}>delete</button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
