import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../features/Posts/slices/postSlice";

const MockInitialState: InitialState = {
  status: "idle",
  error: null,
  postData: {
    file: null,
    caption: "",
  },
  postId: null,
};

const MockPostSlice = createSlice({
  name: "post",
  initialState: MockInitialState,
  reducers: {},
});

const MockPostSliceReducer = MockPostSlice.reducer;
export default MockPostSliceReducer;
