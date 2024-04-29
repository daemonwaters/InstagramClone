import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  databse,
  query,
  where,
  collection,
  getDocs,
} from "../../../lib/firebase";

export const GetUserPreview = createAsyncThunk(
  "preview/get",
  async (username: string, { rejectWithValue }) => {
    const q = query(collection(databse, "users"), where("username", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        return doc;
      });
      return querySnapshot;
    } catch (error) {
      return rejectWithValue(
        "There was an error getting the user data from database."
      );
    }
  }
);
