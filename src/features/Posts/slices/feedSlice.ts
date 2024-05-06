import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../Users/slices/currentUserSlice";
import { GetFeedPosts } from "../services/GetFeedPosts";
import { DocumentData } from "firebase/firestore";
import { LikePostInFeed } from "../services/LikePstInFeed";
import { UnlikePostInFeed } from "../services/UnlikePostInFeed";

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
      )
      .addCase(LikePostInFeed.rejected, (state, { payload }) => {
        state.status = "fail";
        state.error = {
          message: payload as string,
        };
      })
      .addCase(
        LikePostInFeed.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.posts = state.posts.map((post) => {
            if (post.id == action.payload) {
              Object.assign(post, { likes_count: post.likes_count + 1 });
              return post;
            }
            return post;
          });
        }
      )
      .addCase(UnlikePostInFeed.rejected, (state, { payload }) => {
        state.status = "fail";
        state.error = {
          message: payload as string,
        };
      })
      .addCase(
        UnlikePostInFeed.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.posts = state.posts.map((post) => {
            if (post.id == action.payload) {
              Object.assign(post, { likes_count: post.likes_count - 1 });
              return post;
            }
            return post;
          });
        }
      );
  },
});

const feedSliceReducer = feedSlice.reducer;
export const {} = feedSlice.actions;
export default feedSliceReducer;
