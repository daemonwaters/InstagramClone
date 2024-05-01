import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, arrayRemove, databse, updateDoc } from "../../../lib/firebase";
import { SetStateAction } from "react";

type Params<T = string> = {
  currentUserId: T;
  userWhoGetsUnfollowedId: T;
  signal: React.Dispatch<SetStateAction<boolean>>;
};

export const UnfollowUser = createAsyncThunk(
  "currentUser/unfollowAction",
  async (params: Params, { rejectWithValue }) => {
    const currentUserRef = doc(databse, "users", params.currentUserId);
    const userWhoGetsUnfollowedRef = doc(
      databse,
      "users",
      params.userWhoGetsUnfollowedId
    );
    try {
      await updateDoc(userWhoGetsUnfollowedRef, {
        followers: arrayRemove(params.currentUserId),
      });

      await updateDoc(currentUserRef, {
        following: arrayRemove(params.userWhoGetsUnfollowedId),
      });

      params.signal(false);
      return params.userWhoGetsUnfollowedId;
    } catch (error) {
      return rejectWithValue(
        "Fail , There was an error unfollowing the intended user " + error
      );
    }
  }
);
