import { createSlice } from "@reduxjs/toolkit";
import { InitialState as UserInitialStateType } from "../slices/currentUserSlice";
import { GetUserPreview } from "../services/GetUserPreview";
import Placeholder from "../../../assets/imgs/profile-placeholder.jpeg";

type InitialState = {
  error: null | { message: string };
  status: "idle" | "fail" | "succuss" | "pending";
  user: Omit<UserInitialStateType, "error">;
};

const initialState: InitialState = {
  error: null,
  status: "idle",
  user: {
    username: "",
    avatar_url: Placeholder,
    bio: "",
    posts: [],
    followers: [],
    following: [],
    uid: "",
  },
};

const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    setPreviewUser : (state , {payload})=> {
        state.user = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetUserPreview.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetUserPreview.rejected, (state, action) => {
        state.status = "fail";
        state.error = {
          message: action.payload as string,
        };
      })
      .addCase(GetUserPreview.fulfilled, (state, { payload: snapshots }) => {
        state.status = "succuss";
        snapshots.forEach((doc) => {
          const data = doc.data();
          state.user = {
            username: data.username,
            avatar_url: data.avatar_url,
            bio: data.bio,
            posts: data.posts,
            followers: data.followers,
            following: data.following,
            uid: data.uid,
          };
        });
      });
  },
});

const previewSliceReducer = previewSlice.reducer;
export const {setPreviewUser} = previewSlice.actions
export default previewSliceReducer;
