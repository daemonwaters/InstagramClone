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

const MockPosts: Array<Post> = [
  {
    author: "david24",
    avatar: PlaceholderAvatar1,
    date: "2h",
    likes_count: 24,
    caption: "Awesome day in the nature",
    post_img_url: PostPlaceholder1,
    id: 1,
  },
  {
    author: "tds_2002",
    avatar: PlaceholderAvatar2,
    date: "3h",
    likes_count: 90,
    caption: "Look at this view! I love this season.",
    post_img_url: PostPlaceholder2,
    id: 2,
  },
  {
    author: "james123",
    avatar: PlaceholderAvatar3,
    date: "1d",
    likes_count: 43,
    caption: "Check out my fav car! One day i will buy it.",
    post_img_url: PostPlaceholder3,
    id: 3,
  },
  {
    author: "somedude34",
    avatar: PlaceholderAvatar4,
    date: "2d",
    likes_count: 12,
    caption: "Amazing view of Toronto!",
    post_img_url: PostPlaceholder4,
    id: 4,
  },
  {
    author: "jalenx12y",
    avatar: PlaceholderAvatar5,
    date: "1w",
    likes_count: 200,
    caption: "No Caption , just beauty!",
    post_img_url: PostPlaceholder5,
    id: 5,
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
    step : MockStepSliceReducer , 
    editProcess : MockEditSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const withRedux: Decorator = (story) => {
  return <Provider store={MockStore}>{story()}</Provider>;
};
