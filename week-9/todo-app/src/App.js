import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Hit the gym",
      done: false,
    },
  ]);
  function addTodo() {
    let newArray = [...todos];
    newArray.push({
      title: "eat food",
      description: "take diet",
      done: true,
    });
    setTodos(newArray);
  }
  function Todo(props) {
    return (
      <div>
        ({props.title}
        {props.description}
        {props.done ? "Task is done" : "Task is incomplete"})
      </div>
    );
  }
  return (
    <div className="App">
      <div className="App-header">
        <input id="title" type="text" placeholder="Title"></input>
        <input id="descrition" type="text" placeholder="Description"></input>
        <input id="status" type="text" placeholder="status"></input>

        <button onClick={addTodo}>Add TODO</button>
        {/* {JSON.stringify(todos)} */}
        {todos.map((todo) => (
          <Todo
            title={todos.title}
            description={todos.description}
            status={todos.status}
          ></Todo>
        ))}
      </div>
    </div>
  );
}

export default App;
