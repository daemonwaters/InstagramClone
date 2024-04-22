import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/Users/slices/authSlice";
import currentUserReducer from "../features/Users/slices/currentUserSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    currentUser: currentUserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;
