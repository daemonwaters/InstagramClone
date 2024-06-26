import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../features/Users/slices/suggestionSlice";
import MockAvatar from "../../assets/svgs/avatarmock.svg";

const initialState: InitialState = {
  error: null,
  suggestedUsers: [
    {
      avatar: MockAvatar,
      user_id: "12345678",
      username: "James",
    },
    {
      avatar: MockAvatar,
      user_id: "87654321",
      username: "Luke",
    },
  ],
};

const MockSuggestionSlice = createSlice({
  name: "suggestion",
  initialState,
  reducers: {},
});

const MockSuggestionSliceReducer = MockSuggestionSlice.reducer;
export default MockSuggestionSliceReducer;
