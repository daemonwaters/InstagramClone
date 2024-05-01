import { createSlice } from "@reduxjs/toolkit";
import { GetSuggestions } from "../services/GetSuggestions";

type SuggestedUser = {
  avatar: string;
  username: string;
  user_id: string;
  followers: string[];
};

export type InitialState = {
  error: { message: string } | null;
  suggestedUsers: Array<SuggestedUser>;
};

const initialState: InitialState = {
  error: null,
  suggestedUsers: [],
};

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetSuggestions.rejected, (state, { payload }) => {
        state.error = {
          message: payload as string,
        };
      })
      .addCase(GetSuggestions.fulfilled, (state, { payload: snapshots }) => {
        const suggestedUsers: Array<SuggestedUser> = [];
        snapshots.forEach((doc) =>
          suggestedUsers.push({
            avatar: doc.get("avatar_url"),
            username: doc.get("username"),
            user_id: doc.get("uid"),
            followers: doc.get("followers"),
          })
        );
        state.suggestedUsers = suggestedUsers;
      });
  },
});

const suggestionSliceReducer = suggestionSlice.reducer;
export default suggestionSliceReducer;
