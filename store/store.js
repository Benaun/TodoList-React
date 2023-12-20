import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice/TodoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

