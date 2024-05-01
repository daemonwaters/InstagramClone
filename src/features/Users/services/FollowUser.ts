import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, arrayUnion, databse, updateDoc } from "../../../lib/firebase";
import { SetStateAction } from "react";

type Params<T = string> = {
  currentUserId: T;
  userWhoGetsFollowedId: T;
  signal: React.Dispatch<SetStateAction<boolean>>;
};

export const FollowUser = createAsyncThunk(
  "currentUser/followAction",
  async (params: Params, { rejectWithValue }) => {
    const currentUserRef = doc(databse, "users", params.currentUserId);
    const userWhoGetsFollowedRef = doc(
      databse,
      "users",
      params.userWhoGetsFollowedId
    );
    try {
      await updateDoc(userWhoGetsFollowedRef, {
        followers: arrayUnion(params.currentUserId),
      });

      await updateDoc(currentUserRef, {
        following: arrayUnion(params.userWhoGetsFollowedId),
      });

      params.signal(true);
      return params.userWhoGetsFollowedId;
    } catch (error) {
      return rejectWithValue(
        "Fail , There was an error following the intended user " + error
      );
    }
  }
);
