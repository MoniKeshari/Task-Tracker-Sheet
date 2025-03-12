// redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filters: {
    status: 'all',  // 'all', 'completed', 'active'
    search: '',
  },
  taskToEdit: null, // For handling task edit
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setTaskToEdit: (state, action) => {
      state.taskToEdit = action.payload;  // Set task to edit
    },
    clearTaskToEdit: (state) => {
      state.taskToEdit = null;  // Clear taskToEdit when done
    },
  },
});

export const { 
  addTask, 
  deleteTask, 
  toggleTaskStatus, 
  updateTask, 
  setFilter, 
  setTaskToEdit, 
  clearTaskToEdit 
} = taskSlice.actions;

export default taskSlice.reducer;
