import { InitialState } from "../../features/Users/slices/previewSlice";
import MockAvatar from "../../assets/svgs/avatarmock.svg";
import { createSlice } from "@reduxjs/toolkit";

const MockInitialState: InitialState = {
  error: null,
  status: "idle",
  user: {
    username: "James",
    avatar_url: MockAvatar,
    bio: "Hello this is my bio",
    posts: [],
    followers: [],
    following: [],
    uid: "56789",
    documentId: "34679",
  },
};

const MockProfilePreviewSlice = createSlice({
  name: "mockPreview",
  initialState: MockInitialState,
  reducers: {},
});

const MockProfilePreviewSliceReducer = MockProfilePreviewSlice.reducer;
export default MockProfilePreviewSliceReducer;
