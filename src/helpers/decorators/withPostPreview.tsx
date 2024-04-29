import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../features/Posts/slices/postPreviewSlice";
import PlaceholderPost from "../../assets/imgs/post-placeholder.avif";
import MockAvatar from "../../assets/svgs/avatarmock.svg";

const initialState: InitialState = {
  isOnScreen: false,
  post: {
    id: "123",
    avatar: MockAvatar,
    author: "James",
    content_url: PlaceholderPost,
    createdAt: 20,
    caption: "hello this is mock post",
    likes_count: 20,
    editValue: {
      filter: "",
      customClass: {},
    },
  },
};

const MockPostPreviewSlice = createSlice({
  name: "postPreview",
  initialState,
  reducers: {},
});

const MockPostPreviewSliceReducer = MockPostPreviewSlice.reducer;
export default MockPostPreviewSliceReducer;
