import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: "register",
  data: {
    name: "1",
    email: "2",
    password: "33",
  },
  response: {},
  counter: 0,
};

const registerSlice = createSlice({
  name: "register",
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
    submitRegister: (state, action) => {
      axios
        .post("http://localhost:3000/users", {
          name: state.data.name,
          email: state.data.email,
          password: state.data.password,
        })
        .then((res) => {
          state.response = res;
          state.counter += 1;
          console.log(res);
          console.log("state.counter", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addCounter: (state) => {
      state.counter += 1;
    },
  },
});

export const { setName, setEmail, setPassword, submitRegister, addCounter } =
  registerSlice.actions;

export default registerSlice.reducer;
