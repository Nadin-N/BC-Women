import { createSlice } from '@reduxjs/toolkit';
import { getFriends,  deleteFriends, addFriend } from './operations';


const initialState = {
  items: [],
  isLoading: false,
  error: null
};
const friendSlice = createSlice({
  // Имя слайса
  name: 'friends',
  // Начальное состояние редюсера слайса
  initialState,
  // Объект редюсеров
 
  extraReducers:{
    [getFriends.pending]: (state) => {
      state.isLoading = true;
    },
    [getFriends.fulfilled]: (state, { payload }) => {
      state.items = [...payload].reverse();
      state.isLoading = false;
    },
    [getFriends.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteFriends.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteFriends.fulfilled]: (state, { payload }) => {
          state.items = state.items.filter(item => item.id !== payload.id);
          state.isLoading = false;

    },
    [deleteFriends.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;},
      [addFriend.pending]: (state, { payload }) => {
        state.isLoading = true;},
        [addFriend.fulfilled]: (state, { payload }) => {
          state.items = [payload, ...state.items];
          state.isLoading = false;
        },
        [addFriend.rejected]: (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        },
}});
// reducers: {
//   addFriend(state, { payload }) {
//     state.items = [...state.items, payload];
//   },
//   deleteFriend(state, { payload }) {
//     state.items = state.items.filter(item => item.id !== payload);
//   },
// },


export const friendReducer = friendSlice.reducer;
