import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../Users/slices/currentUserSlice";
import { GetFeedPosts } from "../services/GetFeedPosts";
import { DocumentData } from "firebase/firestore";

type InitialState = {
  error: null | { message: string };
  status: "idle" | "fetching" | "succuss" | "fail";
  posts: Array<Post>;
};

const initialState: InitialState = {
  error: null,
  status: "idle",
  posts: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetFeedPosts.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(GetFeedPosts.rejected, (state, { payload }) => {
        state.status = "fail";
        state.error = {
          message: payload as string,
        };
      })
      .addCase(
        GetFeedPosts.fulfilled,
        (state, action: PayloadAction<DocumentData[]>) => {
          state.posts = action.payload as Post[];
          state.status = "succuss";
        }
      );
  },
});

const feedSliceReducer = feedSlice.reducer;
export const {} = feedSlice.actions;
export default feedSliceReducer;
