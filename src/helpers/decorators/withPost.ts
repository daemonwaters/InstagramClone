import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../features/Posts/slices/postSlice";

const MockInitialState: InitialState = {
  file: null,
  caption: "",
};

const MockPostSlice = createSlice({
  name: "post",
  initialState: MockInitialState,
  reducers: {},
});

const MockPostSliceReducer = MockPostSlice.reducer;
export default MockPostSliceReducer;
