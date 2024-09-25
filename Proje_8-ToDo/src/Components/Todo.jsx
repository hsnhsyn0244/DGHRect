import React, { useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../App.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const RemoveTodo = () => {
    onRemoveTodo(id);
  };
  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgray",
        marginTop: "10px",
        height: "40px",
      }}
    >
      <div>
        {editable ? (
          <input
            style={{ width: "380px" }}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoMdRemoveCircle onClick={RemoveTodo} className="todo-icons" />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
