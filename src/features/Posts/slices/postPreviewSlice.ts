import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../Users/slices/currentUserSlice";
import { LikePostInPreview } from "../services/LikePostInPreview";
import { UnlikePostInPreview } from "../services/UnlikePostInPreview";

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
  extraReducers: (builder) => {
    builder
      .addCase(LikePostInPreview.rejected, (_, { payload }) => {
        console.error(payload);
      })
      .addCase(LikePostInPreview.fulfilled, (state) => {
        state.post!.likes_count += 1;
      })
      .addCase(UnlikePostInPreview.rejected, (_, { payload }) => {
        console.error(payload);
      })
      .addCase(UnlikePostInPreview.fulfilled, (state) => {
        state.post!.likes_count -= 1;
      });
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
