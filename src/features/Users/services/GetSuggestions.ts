import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  databse,
  query,
  where,
  collection,
  getDocs,
} from "../../../lib/firebase";

export const GetSuggestions = createAsyncThunk(
  "suggestion/getUsers",
  async (uid: string, { rejectWithValue }) => {
    const q = query(collection(databse, "users"), where("uid", "!=", uid));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        return doc;
      });
      return querySnapshot;
    } catch (error) {
      return rejectWithValue(
        "There was an error getting suggested users from database."
      );
    }
  }
);
