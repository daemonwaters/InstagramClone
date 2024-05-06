import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/Users/slices/authSlice";
import currentUserReducer from "../features/Users/slices/currentUserSlice";
import stepSliceReducer from "../features/Posts/slices/stepSlice";
import modalSliceReducer from "../features/Posts/slices/modalSlice";
import editSliceReducer from "../features/Posts/slices/editSlice";
import postSlideReducer from "../features/Posts/slices/postSlice";
import suggestionSliceReducer from "../features/Users/slices/suggestionSlice";
import previewSliceReducer from "../features/Users/slices/previewSlice";
import postPreviewSliceReducer from "../features/Posts/slices/postPreviewSlice";
import feedSliceReducer from "../features/Posts/slices/feedSlice";
import inboxSliceReducer from "../features/Messages/slices/inboxSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    currentUser: currentUserReducer,
    step: stepSliceReducer,
    modal: modalSliceReducer,
    editProcess: editSliceReducer,
    post: postSlideReducer,
    suggestion: suggestionSliceReducer,
    preview: previewSliceReducer,
    postPreview: postPreviewSliceReducer,
    feed: feedSliceReducer,
    inbox: inboxSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;
