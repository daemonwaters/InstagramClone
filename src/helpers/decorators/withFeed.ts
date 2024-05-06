import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../features/Users/slices/currentUserSlice";

type InitialState = {
  error: null | { message: string };
  status: "idle" | "fetching" | "succuss" | "fail";
  posts: Array<Post>;
};

const MockInitialState: InitialState = {
  error: null,
  status: "idle",
  posts: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState: MockInitialState,
  reducers: {},
  extraReducers: () => {},
});

const MockFeedSliceReducer = feedSlice.reducer;
export default MockFeedSliceReducer;
