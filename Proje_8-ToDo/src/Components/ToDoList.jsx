import React from "react";
import Todo from "./Todo";

function ToDoList({ todos, onRemoveTodo, onUpdateTodo }) {
  return (
    <div style={{ width: "100%", marginTop: "50px" }}>
      {todos &&
        todos.map((todo) => (
          <Todo
            onRemoveTodo={onRemoveTodo}
            key={todo.id}
            todo={todo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
}

export default ToDoList;
