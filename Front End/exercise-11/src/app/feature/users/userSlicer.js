import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: "users",
  status: "idle",
  data: [],
  response: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  } catch (error) {
    console.log("error", error);
    // Handle errors if the request fails
    throw error;
  }
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.data.name = action.payload;
    },
    setEmail: (state, action) => {
      state.data.email = action.payload;
    },
    setPassword: (state, action) => {
      state.data.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.response = action.error.message;
    });
  },
});

export const { setName, setEmail, setPassword } = userSlice.actions;

export default userSlice.reducer;
