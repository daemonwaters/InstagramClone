import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/Users/slices/authSlice";
import currentUserReducer from "../features/Users/slices/currentUserSlice";
import stepSliceReducer from "../features/Posts/slices/stepSlice";
import modalSliceReducer from "../features/Posts/slices/modalSlice";
import editSliceReducer from "../features/Posts/slices/editSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    currentUser: currentUserReducer,
    step: stepSliceReducer,
    modal: modalSliceReducer,
    editProcess : editSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;
