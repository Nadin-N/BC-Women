import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
    baseURL: 'https://63fc9ff48ef914c5559bab4d.mockapi.io/',
   
  });


export const getFriends = createAsyncThunk("friends/fetchAll", async () => {
  const response = await instance.get("/friends");
  return response.data;
});

export const deleteFriends = createAsyncThunk("friends/delete", async (friendId, ) => {
    const response = await instance.delete(`/friends/${friendId}`);
    return response.data;
  });

  export const addFriend = createAsyncThunk("friends/add", async (friend ) => {
    const response = await instance.post(`/friends`, friend);
    return response.data;
  });


