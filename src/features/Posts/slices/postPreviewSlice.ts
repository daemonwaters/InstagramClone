import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../Users/slices/currentUserSlice";

export type InitialState = {
  isOnScreen: boolean;
  post: Post | null;
};

const initialState: InitialState = {
  isOnScreen: false,
  post: null,
};

const postPreviewSlice = createSlice({
  name: "postPreview",
  initialState,
  reducers: {
    showPostPreview: (state) => {
      state.isOnScreen = true;
    },
    closePostPreview: (state) => {
      state.isOnScreen = false;
    },
    setPostPreview: (state, action: PayloadAction<Post>) => {
      state.post = action.payload;
    },
    clearPostPreview: (state) => {
      state = initialState;
    },
  },
});

const postPreviewSliceReducer = postPreviewSlice.reducer;
export default postPreviewSliceReducer;
export const {
  showPostPreview,
  closePostPreview,
  setPostPreview,
  clearPostPreview,
} = postPreviewSlice.actions;
