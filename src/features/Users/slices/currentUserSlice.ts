import { createSlice } from "@reduxjs/toolkit";
import Placeholder from "../../../assets/imgs/profile-placeholder.jpeg";
import { GetUserFromFirestore } from "../services/GetUserFromFirestore";
import { ChangeAvatar } from "../services/ChangeAvatar";
import { ChangeBio } from "../services/ChangeBio";
import { ActiveFilter, CustomClass } from "../../Posts/slices/editSlice";
import { sharePost } from "../../Posts/services/sharePost";

export type Post = {
  id: string;
  avatar: string;
  author: string;
  content_url: string;
  createdAt: number;
  caption: string;
  likes_count: number;
  editValue: {
    filter: ActiveFilter;
    customClass: CustomClass;
  };
};

export type InitialState = {
  error: { message: string } | null;
  username: string;
  avatar_url: string;
  bio: string;
  posts: Array<Post>;
  following: [];
  followers: [];
  uid: string;
};

 export const initialState = {
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
      })
      .addCase(ChangeAvatar.rejected, (state, { payload }) => {
        state.error = {
          message: payload as string,
        };
      })
      .addCase(ChangeAvatar.fulfilled, (state, { payload }) => {
        state.avatar_url = payload;
      })
      .addCase(ChangeBio.rejected, (state, { payload }) => {
        state.error = {
          message: payload as string,
        };
      })
      .addCase(ChangeBio.fulfilled, (state, { payload }) => {
        state.bio = payload;
      })
      .addCase(sharePost.rejected, (state, { payload }) => {
        state.error = {
          message: payload as string,
        };
      })
      .addCase(sharePost.fulfilled, (state, { payload }) => {
        state.posts.push(payload)
      });
  },
});

const currentUserReducer = currentUserSlice.reducer;
export default currentUserReducer;
