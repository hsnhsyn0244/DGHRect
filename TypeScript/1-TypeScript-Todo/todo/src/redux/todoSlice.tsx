import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../tpes/types";

const initialState: TodoInitialState = {
  todos: [],
};
export const todoSLice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodoById: (
      state: TodoInitialState,
      action: PayloadAction<number>
    ) => {
      //almış olduğumuz her bir todonun id si, action.payload dan gelen id ye eşit değilse eşit olmayanları yakala ve bunları yeni bir array olrak dön.
      state.todos = [
        ...state.todos.filter((todo: TodoType) => todo.id !== action.payload),
      ];
    },
    updateTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [
        ...state.todos.map((todo: TodoType) =>
          todo.id === action.payload.id ? todo : action.payload
        ),
      ];
    },
  },
});

export const { createTodo, removeTodoById, updateTodo } = todoSLice.actions;
export default todoSLice.reducer;
