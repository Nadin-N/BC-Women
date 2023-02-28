import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getFriends, deleteFriends, addFriend } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const friendSlice = createSlice({
  // Имя слайса
  name: 'friends',
  // Начальное состояние редюсера слайса
  initialState,
  // Объект редюсеров

  extraReducers: builder =>
    builder
      .addCase(getFriends.fulfilled, (state, { payload }) => {
        state.items = [...payload].reverse();
        state.isLoading = false;
      })
      .addCase(deleteFriends.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
      })
      .addCase(addFriend.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getFriends.pending, deleteFriends.pending, addFriend.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getFriends.rejected,
          deleteFriends.rejected,
          addFriend.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});
// reducers: {
//   addFriend(state, { payload }) {
//     state.items = [...state.items, payload];
//   },
//   deleteFriend(state, { payload }) {
//     state.items = state.items.filter(item => item.id !== payload);
//   },
// },

export const friendReducer = friendSlice.reducer;

