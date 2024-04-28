import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sharePost } from "../services/sharePost";

export type InitialState = {
  status: "idle" | "pending" | "succuss" | "fail";
  error: { message: string } | null;
  postData: {
    file: File | null;
    caption: string | "";
  };
  postId: string | null;
};

const initialState: InitialState = {
  status: "idle",
  error: null,
  postData: {
    file: null,
    caption: "",
  },
  postId: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<File>) => {
      state.postData.file = action.payload;
    },
    setCaption: (state, action: PayloadAction<string>) => {
      state.postData.caption = action.payload;
    },
    clearPostData: (state) => {
      state.postData = {
        file: null,
        caption: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sharePost.pending, (state) => {
        state.status = "pending";
      })
      .addCase(sharePost.rejected, (state, { payload }) => {
        state.status = "fail";
        state.error = {
          message: payload as string,
        };
      })
      .addCase(sharePost.fulfilled, (state, { payload }) => {
        state.status = "succuss";
        state.postId = payload;
      });
  },
});

const postSlideReducer = postSlice.reducer;
export const { setFile, setCaption, clearPostData } = postSlice.actions;
export default postSlideReducer;
