import { configureStore } from '@reduxjs/toolkit';
import { friendReducer } from './friendsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    friends: friendReducer,
    filter: filterReducer,
  },
});
