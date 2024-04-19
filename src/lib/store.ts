import { configureStore } from "@reduxjs/toolkit";
import currentUserSliceReducer from "../features/Users/slices/currentUser";

const store = configureStore({
  reducer: {
    currentUser: currentUserSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;
