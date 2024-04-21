import { createSlice } from "@reduxjs/toolkit";
import Placeholder from "../../../assets/imgs/profile-placeholder.jpeg";
import { signUpUser } from "../services/SignUpUser";

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
  status: "idle" | "pending" | "succuss" | "fail";
  error: { message: string } | null;
  hasAccess: boolean
  data: {
    username: string;
    avatar_url: string;
    bio: string;
    posts: Array<Post>;
    following: [];
    followers: [];
    uid: string;
  };
};

const initialState = {
  status: "idle",
  error: null,
  hasAccess: false,
  data: {
    username: "",
    avatar_url: Placeholder,
    bio: "",
    posts: [],
    following: [],
    followers: [],
    uid: "",
  },
} satisfies InitialState as InitialState;

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = {
          message: action.payload as string,
        };
        state.status = "fail";
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        let { uid, email } = payload.user;
        state.data.uid = uid;
        state.data.username = email as string;
        state.hasAccess = true
        state.status = "succuss";
      })
      .addCase(signUpUser.pending, (state) => {
        state.status = "pending";
      });
  },
});

const currentUserSliceReducer = currentUserSlice.reducer;
export default currentUserSliceReducer;
