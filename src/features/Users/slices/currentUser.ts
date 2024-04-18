import { createSlice, Slice } from "@reduxjs/toolkit";
import Placeholder from "../../../assets/imgs/profile-placeholder.jpeg";
import { signUpUser } from "../services/SignUpUser";

type InitialState = {
  error: { message: string } | null;
  data: {
    username: string;
    avatar_url: string;
    bio: string;
    posts: [];
    following: [];
    followers: [];
    uid: string;
  };
};

const initialState: InitialState = {
  error: null,
  data: {
    username: "",
    avatar_url: Placeholder,
    bio: "",
    posts: [],
    following: [],
    followers: [],
    uid: "",
  },
};

const currentUserSlice: Slice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = {
          message: action.payload as string,
        };
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        let { uid, email } = payload.user;
        state.data.uid = uid;
        state.data.username = email as string;
      });
  },
});

export const currentUserSliceReducer = currentUserSlice.reducer;
