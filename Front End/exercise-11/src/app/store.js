import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/users/userSlicer";
import registerReducer from "./feature/register/registerSlicer";

export const store = configureStore({
  reducer: {
    users: userReducer,
    register: registerReducer,
  },
});
