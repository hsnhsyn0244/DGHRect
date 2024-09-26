import React, { useState } from "react";

import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../tpes/types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const [editable, setEditable] = useState(false);

  const { id, content } = todoProps;

  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();

  const handleRomeveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "25px",
        border: "1px solid lightgray",
        padding: "16px ",
        borderRadius: "5px",
      }}
    >
      {editable ? (
        <input
          type="text"
          style={{
            width: "350px",
            border: "none",
            borderBottom: "1px solid lightgray",
            borderRadius: "5px",
            outline: "none",
          }}
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{newTodo}</div>
      )}
      <div style={{}}>
        <IoMdRemoveCircleOutline
          onClick={handleRomeveTodo}
          className="icons"
          style={{ marginRight: "7px" }}
        />
        {editable ? (
          <FaCheck onClick={handleUpdateTodo} className="icons" />
        ) : (
          <FaRegEdit onClick={() => setEditable(true)} className="icons" />
        )}
      </div>
    </div>
  );
}

export default Todo;
