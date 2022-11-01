import { createSlice } from "@reduxjs/toolkit";
import { saveState, loadState } from "../../utils/localStorage";

const initialState = loadState();

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
        saveState(state);
      }
    },
    updateTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload.id);
      if (taskFound) {
        state[state.indexOf(taskFound)].status = !action.payload.status;
        saveState(state);
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
