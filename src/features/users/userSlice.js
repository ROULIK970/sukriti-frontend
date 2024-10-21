import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUsers,addUser, setCurrentUser } = userSlice.actions;

export const selectUsers = (state) => state.users.users;

export default userSlice.reducer;
