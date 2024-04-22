import { createSlice } from "@reduxjs/toolkit";
import Placeholder from "../../../assets/imgs/profile-placeholder.jpeg";
import { GetUserFromFirestore } from "../services/GetUserFromFirestore";
export type Post = {
  author: string;
  avatar: string;
  date: string;
  likes_count: number;
  caption: string;
  post_img_url: string;
  id: number;
};

type InitialState = {
  error: { message: string } | null;
  username: string;
  avatar_url: string;
  bio: string;
  posts: Array<Post>;
  following: [];
  followers: [];
  uid: string;
};

const initialState = {
  error: null,
  username: "",
  avatar_url: Placeholder,
  bio: "",
  posts: [],
  followers: [],
  following: [],
  uid: "",
} satisfies InitialState as InitialState;

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetUserFromFirestore.rejected, (state, { payload }) => {
        state.error = {
          message: payload as string,
        };
      })
      .addCase(GetUserFromFirestore.fulfilled, (state, { payload }) => {
        state.username = payload.username;
        state.avatar_url = payload.avatar_url;
        state.bio = payload.bio;
        state.followers = payload.followers;
        state.following = payload.following;
        state.uid = payload.uid;
        state.posts = payload.posts;
      });
  },
});

const currentUserReducer = currentUserSlice.reducer;
export default currentUserReducer;
