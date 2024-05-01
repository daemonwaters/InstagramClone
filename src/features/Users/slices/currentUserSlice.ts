import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Placeholder from "../../../assets/imgs/profile-placeholder.jpeg";
import { GetUserFromFirestore } from "../services/GetUserFromFirestore";
import { ChangeAvatar } from "../services/ChangeAvatar";
import { ChangeBio } from "../services/ChangeBio";
import { ActiveFilter, CustomClass } from "../../Posts/slices/editSlice";
import { sharePost } from "../../Posts/services/sharePost";
import { DocumentData } from "firebase/firestore";

export type Post = {
  id: string;
  avatar: string;
  author: string;
  authorId: string;
  content_url: string;
  createdAt: number;
  caption: string;
  likes_count: number;
  likedBy: Array<string>;
  editValue: {
    filter: ActiveFilter;
    customClass: CustomClass;
  };
};

type UserPayload = {
  documentId: string;
  data: DocumentData;
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
  documentId: string;
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
  documentId: "",
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
      .addCase(
        GetUserFromFirestore.fulfilled,
        (state, action: PayloadAction<UserPayload>) => {
          const { data, documentId } = action.payload;
          state.username = data.username;
          state.avatar_url = data.avatar_url;
          state.bio = data.bio;
          state.followers = data.followers;
          state.following = data.following;
          state.uid = data.uid;
          state.posts = data.posts;
          state.documentId = documentId;
        }
      )
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
        state.posts.push(payload);
      });
  },
});

const currentUserReducer = currentUserSlice.reducer;
export default currentUserReducer;
