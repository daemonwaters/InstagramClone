import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  databse,
  query,
  where,
  collection,
  getDocs,
} from "../../../lib/firebase";
import { DocumentData } from "firebase/firestore";

export const GetFeedPosts = createAsyncThunk(
  "feed/getPosts",
  async (currentUserId: string, { rejectWithValue }) => {
    const q = query(
      collection(databse, "users"),
      where("followers", "array-contains", currentUserId)
    );
    const posts: Array<DocumentData> = [];
    try {
      const snapshots = await getDocs(q);
      snapshots.forEach((doc) => {
        posts.push(doc.get("posts"));
      });
      return posts.flat();
    } catch (error) {
      return rejectWithValue(`Error , failed to get feed posts , ${error}`);
    }
  }
);
