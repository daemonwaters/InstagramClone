import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Decorator } from "@storybook/react";
import Placeholder from '../../assets/imgs/profile-placeholder.jpeg'


const MockInitialState  = {
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
}

export const withRedux: Decorator = (story) => {
  return (
    <Provider
      store={configureStore({
        reducer: {
          currentUser: createSlice({
            name: "currentUser",
            initialState: MockInitialState,
            reducers: {},
          }).reducer,
        },
      })}
    >
      {story()}
    </Provider>
  );
};
