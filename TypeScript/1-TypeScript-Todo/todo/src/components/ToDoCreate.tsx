import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../tpes/types";

function ToDoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Lütfen Todo giriniz ....");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        className="todo-input"
        type="text"
        placeholder="To Do Giriniz ..."
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        Oluştur
      </button>
    </div>
  );
}

export default ToDoCreate;
