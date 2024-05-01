import { createSlice } from "@reduxjs/toolkit";
import PreviewMock from "../../assets/imgs/post-placeholder.avif";

const MockInitialState = {
  currentStep: 0,
  preview_src: PreviewMock,
};

const MockStepSlice = createSlice({
  name: "step",
  initialState: MockInitialState,
  reducers: {},
});

const MockStepSliceReducer = MockStepSlice.reducer;
export default MockStepSliceReducer;
