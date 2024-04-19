import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Decorator } from "@storybook/react";
import Placeholder from '../../assets/imgs/profile-placeholder.jpeg'

const MockInitialState = {
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
};

const MockSlice = createSlice({
  name: "currentUser",
  initialState: MockInitialState,
  reducers: {},
});

const MockStore = configureStore({
  reducer: {
    currentUser: MockSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export const withRedux: Decorator = (story) => {
  return <Provider store={MockStore}>{story()}</Provider>;
};