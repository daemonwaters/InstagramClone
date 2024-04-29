import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Decorator } from "@storybook/react";
import PlaceholderAvatar1 from "../../assets/imgs/profile-placeholder.jpeg";
import PlaceholderAvatar2 from "../../assets/svgs/avatar2.svg";
import PlaceholderAvatar3 from "../../assets/imgs/avatar3.png";
import PlaceholderAvatar4 from "../../assets/imgs/avatar4.jpeg";
import PlaceholderAvatar5 from "../../assets/svgs/avatarmock.svg";
import PostPlaceholder1 from "../../assets/imgs/post-placeholder.avif";
import PostPlaceholder2 from "../../assets/imgs/fall.jpeg";
import PostPlaceholder3 from "../../assets/imgs/car.webp";
import PostPlaceholder4 from "../../assets/imgs/toronto.webp";
import PostPlaceholder5 from "../../assets/imgs/tree.jpeg";
import { Post } from "../../features/Users/slices/currentUserSlice";
import MockStepSliceReducer from "./withSteps";
import MockEditSliceReducer from "./withEdit";
import MockPostSliceReducer from "./withPost";
import MockPostPreviewSliceReducer from "./withPostPreview";
import MockSuggestionSliceReducer from "./withSuggestion";

const MockPosts: Array<Post> = [
  {
    author: "david24",
    avatar: PlaceholderAvatar1,
    likes_count: 24,
    createdAt: 1000,
    caption: "Awesome day in the nature",
    content_url: PostPlaceholder1,
    id: "1",
    editValue: {
      filter: "",
      customClass: {},
    },
  },
  {
    author: "tds_2002",
    avatar: PlaceholderAvatar2,
    likes_count: 90,
    createdAt: 2000,
    caption: "Look at this view! I love this season.",
    content_url: PostPlaceholder2,
    id: "2",
    editValue: {
      filter: "",
      customClass: {},
    },
  },
  {
    author: "james123",
    avatar: PlaceholderAvatar3,
    likes_count: 43,
    createdAt: 3000,
    caption: "Check out my fav car! One day i will buy it.",
    content_url: PostPlaceholder3,
    id: "3",
    editValue: {
      filter: "",
      customClass: {},
    },
  },
  {
    author: "somedude34",
    avatar: PlaceholderAvatar4,
    likes_count: 12,
    createdAt: 4000,
    caption: "Amazing view of Toronto!",
    content_url: PostPlaceholder4,
    id: "4",
    editValue: {
      filter: "",
      customClass: {},
    },
  },
  {
    author: "jalenx12y",
    avatar: PlaceholderAvatar5,
    likes_count: 200,
    createdAt: 1000,
    caption: "No Caption , just beauty!",
    content_url: PostPlaceholder5,
    id: "5",
    editValue: {
      filter: "",
      customClass: {},
    },
  },
];

const MockInitialState = {
  error: null,
  username: "",
  avatar_url: PlaceholderAvatar1,
  bio: "",
  posts: MockPosts,
  following: [],
  followers: [],
  uid: "",
};

const MockCurrentUserSlice = createSlice({
  name: "currentUser",
  initialState: MockInitialState,
  reducers: {},
});

const MockAuthSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    error: null,
    hasAccess: true,
    accessId: "1234",
  },
  reducers: {},
});

const MockStore = configureStore({
  reducer: {
    currentUser: MockCurrentUserSlice.reducer,
    auth: MockAuthSlice.reducer,
    step: MockStepSliceReducer,
    editProcess: MockEditSliceReducer,
    post: MockPostSliceReducer,
    postPreview: MockPostPreviewSliceReducer,
    suggestion : MockSuggestionSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const withRedux: Decorator = (story) => {
  return <Provider store={MockStore}>{story()}</Provider>;
};
