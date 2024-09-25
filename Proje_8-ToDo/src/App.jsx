import { useState } from "react";
import "./App.css";
import ToDoCreate from "./Components/ToDoCreate";
import ToDoList from "./Components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    const extractedArray = setTodos([
      ...todos.filter((todo) => todo.id !== todoId),
    ]);
    console.log(extractedArray);
  };
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setTodos([...updatedTodos]);
  };

  console.log(todos);

  return (
    <div className="App">
      <div className="todo1">
        <ToDoCreate onCreateTodo={createTodo} />
        <ToDoList
          onRemoveTodo={removeTodo}
          todos={todos}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
