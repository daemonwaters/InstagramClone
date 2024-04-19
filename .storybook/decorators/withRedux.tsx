import { configureStore, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { initialState } from "../../src/features/Users/slices/currentUser";
import { Decorator } from "@storybook/react";

export const withRedux: Decorator = (story) => {
  return (
    <Provider
      store={configureStore({
        reducer: {
          currentUser: createSlice({
            name: "currentUser",
            initialState: initialState,
            reducers: {},
          }).reducer,
        },
      })}
    >
      {story()}
    </Provider>
  );
};
