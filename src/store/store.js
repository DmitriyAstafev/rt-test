import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reducers/projectSlice';

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
