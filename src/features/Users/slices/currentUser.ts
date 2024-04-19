import { createSlice } from "@reduxjs/toolkit";
import Placeholder from "../../../assets/imgs/profile-placeholder.jpeg";
import { signUpUser } from "../services/SignUpUser";

 type InitialState = {
  status: "idle" | "pending" | "succuss" | "fail";
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

export const initialState = {
  status: "idle",
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
} satisfies InitialState as InitialState

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
        state.status = "succuss";
      })
      .addCase(signUpUser.pending, (state) => {
        state.status = "pending";
      });
  },
});


const currentUserSliceReducer = currentUserSlice.reducer;
export default currentUserSliceReducer
