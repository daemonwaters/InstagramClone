import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Decorator } from "@storybook/react";
import PreviewMock from '../../assets/imgs/post-placeholder.avif'

const MockInitialState = {
    currentStep: 0,
    preview_src: PreviewMock,
};

const MockStepSlice = createSlice({
  name: "step",
  initialState: MockInitialState,
  reducers: {}
});



const MockStore = configureStore({
  reducer: {
    step: MockStepSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const withSteps: Decorator = (story) => {
  return <Provider store={MockStore}>{story()}</Provider>;
};
